const DEFAULT = {
    NOTE_LENGTH: 4
}
//========================================
/*
  o: {
    key: ["C1","G1"],
    active: n=>n%4
  }
*/

const plugin = (()=>{

    return (o = {},graph = {})=>{

        /*
            key should be:
                - string like "C1"
                - array like ["C1","G1"]
                - Chord object 
            */
        let key = ((key)=>{
            let _key
            
            switch(typeof key){

            case "string":
                return [key]

            case "function":
                _key = key( graph.noteIndex, graph.measure )
                if(_key){
                    if(Array.isArray(_key)) return _key
                    else if(typeof _key === "object") return _key
                    else if(typeof _key === "string") return [_key]
                    else return false
                } else {
                    return false
                }

            case "object":
                return key

            default:
                return false
            }

        })(o.key)
        if(!key) return false

        /*
            calculate relative length of note
        */
        let length = (()=>{
            if(!o.length) return DEFAULT.NOTE_LENGTH
            switch(typeof o.length){
            case "number":
                return o.length
            case "function":
                return o.length(graph.noteIndex, graph.measure )
            default:
                return false
            }
        })()
        if(!length) return false

        let newLayer = key.map(k=>{

            return {
                invoker: "audioBufferLine",
                data: {
                    buffer: {
                        sound: graph.sound,
                        length: length * graph.secondsPerNote,
                        key: k,
                        startTime: graph.noteTime
                    },
                    volume: o.volume >= 0 && o.volume <= 1 ? o.volume : null,
                    secondsPerNote: graph.secondsPerNote,
                    targetIndex: 0
                }
            }

        })

        return newLayer

    }

}).call(undefined,window || {})

export default plugin
