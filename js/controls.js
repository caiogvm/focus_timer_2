export default function Controls({
  playButton,
  pauseButton,
  themeLightButton,
  themeDarkButton,
  body
}) {
  function play() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
  }
  function reset() {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
  }
  function changeButtonBG(button) {
    button.classList.toggle('off')
    button.classList.toggle('on')
  }
  function lightToDarkButton() {
    themeLightButton.classList.add('hide')
    themeDarkButton.classList.remove('hide')
    body.classList.toggle('dark')
  }
  function darkToLightButton() {
    themeLightButton.classList.remove('hide')
    themeDarkButton.classList.add('hide')
    body.classList.toggle('dark')
  } 
  return {
    play,
    reset,
    changeButtonBG,
    lightToDarkButton,
    darkToLightButton
  }
}