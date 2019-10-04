import Helper from "../Helper"
import BufferYard from "../BufferYard"
import AudioCore from "../AudioCore"
const context = AudioCore.context

const makeAudioBuffer = ({ buffer, volume })=>{

    let audioBuffer = BufferYard.ship(buffer)
    if(!audioBuffer) return false

    let s = context.createBufferSource()
    s.length = buffer.length
    s.buffer = audioBuffer[0]
    s.startTime = buffer.startTime || context.currentTime

    let g = context.createGain()
    g.gain.setValueAtTime( ( volume && volume >= 0 && volume < 1) ? volume : 1, 0 )
    g.gain.setValueCurveAtTime(
        Helper.getWaveShapeArray(volume),
        buffer.startTime + buffer.length - 0.02, 0.02
    )

    s.connect(g)

    return {
      terminal: g,
      initizalize: ()=>{
          s.start(s.startTime)
      }
    }

}

export default makeAudioBuffer