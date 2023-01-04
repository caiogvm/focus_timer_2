export default function Sound() {
  const forest = new Audio('./audios/forest.wav')
  const rain = new Audio('./audios/rain.wav')
  const coffeehouse = new Audio('./audios/coffeehouse.wav')
  const fireplace = new Audio('./audios/fireplace.wav')
  const buttonPress = new Audio('./audios/button-press.wav')
  const kitchenTimer = new Audio('./audios/kitchen-timer.mp3')
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
