import AudioCore from "./AudioCore"
import Helper from "./Helper"
import * as plugin from "../plugin/graph/index"
import Manipulator from "./Manipulator"
import Filter from "../../Staff/Filter"
import soundTreePool from "./pool.soundtree"
import graphPool from "./pool.graph"
import BufferYard from "./BufferYard"


const CONSTANTS = {
    BPM_MIN: 60,
    BPM_MAX: 180
}

const DEFAULT = {
    MEASURE: 1,
    NOTE_IN_MEASURE: 16,
    PREFETCH_SECOND: AudioCore.powerMode === "middle" ? 0.3 : 2.0
}

const context = AudioCore.context

// const touchFilters = [
//   new Filter({
//     type: "note",
//     length: 16,
//     volume: 50
//   })
// ]
// let _touchGraph, _touchSoundTree

const Module = (()=>{

    class Part {

        constructor(props,handler){
            this.sound = props.sound
            this.id = props.id || Helper.getUUID()
            this.tag = Array.isArray(props.tag) ? props.tag : []
            this.bpm = props.bpm
            this.measure = props.measure
            this.notesInMeasure = props.notesInMeasure
            this.currentNoteIndex = 0

            /*
            generate a function which receives & returns Graph object.
            like this
            ===================

            graph => {
                return graph
                    .note({ ... })
                    .arrpegio({ ... })
                }
            */
            this.filters = props.filters
            this.generator = graph => {
                return props.filters.reduce(( prevGraph, newFilter ) => {
                    if (Object.hasOwnProperty.call( plugin, newFilter.type ) ){
                        return prevGraph[ newFilter.type ]( newFilter.params )
                    } else {
                        return prevGraph
                    }
                }, graph )
            }
            this.generator = this.generator.bind(this)

            // this.touchGenerator = graph => {
            //     return touchFilters.reduce(( prevGraph, newFilter ) => {
            //         if (Object.hasOwnProperty.call( plugin, newFilter.type ) ){
            //             return prevGraph[ newFilter.type ]( newFilter.params )
            //         } else {
            //             return prevGraph
            //         }
            //     }, graph )
            // }
            // this.touchGenerator = this.touchGenerator.bind(this)

            /*
              @nextNoteTime
              - time for next notepoint
              - updated with AudioContext.currentTime
            */
            this.nextNoteTime = 0

            /*
              @age
              - get added 1 when all notepoints are observed
            */
            this.age = 0

            /*
              @noteQuota
              - how many notepoints to observe before changing to not active
              - noteQuota is assigned when loop is imported
            */
            this.noteQuota = 0

            /*
              @consumedNotes
              - observed notepoints
            */
            this.consumedNotes = 0

            /*
              @attachment
              - conceptual value: user would be able to handle any value to part with this
            */
            this.attachment = {}

            this.active = false
            this.mute = !!props.mute

            this.putTimerRight()

            this.observe = this.observe.bind(this)
            BufferYard.import([this.sound])
                .then(() => {
                    console.log(this.sound)
                    this.active = true
                    handler.onLoad && handler.onLoad()
                })
                .catch((err) => { handler.onError && handler.onError(err) })
        }

        // touch(){

        //     if(!this.touchGenerator) return false
        //     _touchGraph = this.touchGenerator(
        //         graphPool.allocate({
        //             sound: this.sound,
        //             measure: Math.floor( this.currentNoteIndex / this.notesInMeasure ),
        //             noteIndex: this.currentNoteIndex % this.notesInMeasure,
        //             noteTime: this.nextNoteTime,
        //             secondsPerNote: this.secondsPerNote,
        //             age: this.age
        //         })
        //     )

        //     _touchSoundTree = soundTreePool.allocate( g )

        //     if(_touchSoundTree.layer.length > 0) Manipulator.connect(_touchSoundTree)

        // }
        // pause(){
        //     this.active = false
        // }

        reset(){
            this.age = 0
            this.currentNoteIndex = 0
            this.consumedNotes = 0
            this.noteQuota = 0
        }

        putTimerRight(nextZeroTime){
            this.nextNoteTime = nextZeroTime || context.currentTime
        }

        setQuota(loopQuota){
            this.noteQuota = loopQuota * this.notesInMeasure
            this.active = true
        }

        observe(attachment){

            let observed = []

            /*
                keep nextNoteTime being always behind secondToPrefetch
            */
            let secondToPrefetch = context.currentTime + DEFAULT.PREFETCH_SECOND
            while (
                this.nextNoteTime - secondToPrefetch > 0 &&
                this.nextNoteTime - secondToPrefetch < DEFAULT.PREFETCH_SECOND
            ){
                secondToPrefetch += DEFAULT.PREFETCH_SECOND
            }
            console.log(this.nextNoteTime)
            /*
                collect soundtrees for notepoints which come in certain range
                */
            while (this.active && this.nextNoteTime < secondToPrefetch){
                if(this.consumedNotes >= this.noteQuota) break

                attachment = typeof attachment === "object" ? Object.assign(attachment,this.attachment) : this.attachment
                let thisMomentObserved = !this.mute && this.capture(attachment)
                if(thisMomentObserved && thisMomentObserved.layer.length > 0) observed = observed.concat(thisMomentObserved)

                this.nextNoteTime += this.secondsPerNote

                if(this.currentNoteIndex + 1 >= this.measure * this.notesInMeasure){
                    this.currentNoteIndex = 0
                    this.age++
                } else {
                    this.currentNoteIndex++
                }

                if(++this.consumedNotes >= this.noteQuota){
                    this.active = false
                    break
                }

            }

            return observed

        }

        /*
          @capture
          - get soundTrees for referring notepoint
        */
        capture(attachment){

            if(!this.generator) return false
            this.currentGraph = this.generator(
                graphPool.allocate({
                    sound: this.sound,
                    measure: Math.floor( this.currentNoteIndex / this.notesInMeasure ),
                    noteIndex: this.currentNoteIndex % this.notesInMeasure,
                    noteTime: this.nextNoteTime,
                    secondsPerNote: this.secondsPerNote,
                    age: this.age,
                    attachment: attachment
                })
            )

            this.currentSoundTree = soundTreePool.allocate( this.currentGraph )

            if(this.currentSoundTree.layer.length > 0){
                return this.currentSoundTree
            } return false

        }

        /*
          @attach
        */
        attach(data = {}){
            this.attachment = Object.assign(this.attachment,data)
        }

        /*
          @detach
        */
        detach(field){
            if (typeof field === "string"){
                delete this.attachment[field]
            } else {
                this.attachment = {}
            }
        }

        /*
          @tag
          tags: A,B,C...
          タグ A,B,C... を追加
        */
        tag(...tags) {
            this.tag = Array.isArray(this.tag) ? this.tag : []
            tags.forEach(tag => {
                if (!this.tag.includes(tag)) this.tag.push(tag)
            })
            return false
        }

        set mute(v){
            if(typeof v === "boolean") this._mute = v
        }
        get mute(){ return this._mute }

        set bpm(v){
            let bpm = Helper.toInt(v,{ max: CONSTANTS.BPM_MAX, min: CONSTANTS.BPM_MIN })
            if(bpm) this._bpm = bpm
        }
        get bpm(){ return this._bpm }

        set chapter(raw){
            if(!Array.isArray(raw)) return false
            this._chapter = raw
        }
        get chapter(){ return this._chapter }

        get secondsPerNote(){ return 60 / this.bpm / 8 }

        get absNoteIndex(){ return this.currentNoteIndex + this.age * this.measure * this.notesInMeasure }

    }

    return Part

}).call(undefined,window || {})

export default Module
