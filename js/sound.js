export default function Sound() {
  const forest = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/forest.wav?raw=true')
  const rain = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/rain.wav?raw=true')
  const coffeehouse = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/coffehouse.wav?raw=true')
  const fireplace = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/fireplace.wav?raw=true')
  const buttonPress = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio('https://github.com/CaioGVM/focus_timer_02/blob/master/audios/kitchen-timer.mp3?raw=true')
  forest.loop = true
  rain.loop = true
  coffeehouse.loop = true
  fireplace.loop = true
  
  function playAudio(audio) {
    audio.play()
  }
  function pauseAudio(audio) {
    audio.pause()
  }
  function setVolume(audio, value) {
    audio.volume = value
  }
  return {
    forest,
    rain,
    coffeehouse,
    fireplace,
    buttonPress,
    kitchenTimer,
    buttonPress,
    playAudio,
    pauseAudio,
    setVolume
  }
}
