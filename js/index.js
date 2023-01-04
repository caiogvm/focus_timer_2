import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'

const body = document.querySelector('body')
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const addButton = document.querySelector('.add')
const minusButton = document.querySelector('.minus')
const forestSoundButton = document.querySelector('.forest ')
const rainSoundButton = document.querySelector('.rain ')
const coffeehouseSoundButton = document.querySelector('.coffeehouse')
const fireplaceSoundButton = document.querySelector('.fireplace ')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const themeLightButton = document.querySelector('.light')
const themeDarkButton = document.querySelector('.dark')
const forestVolume = document.querySelector('.forest + .volume-control')
const rainVolume = document.querySelector('.rain + .volume-control')
const coffeehouseVolume = document.querySelector('.coffeehouse + .volume-control')
const fireplaceVolume = document.querySelector('.fireplace + .volume-control')

const controls = Controls({
  playButton,
  pauseButton,
  themeLightButton,
  themeDarkButton,
  body
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}) 
const sound = Sound()

playButton.addEventListener('click', () => {
  controls.play()
  timer.countdown()
  sound.playAudio(sound.buttonPress)
})
pauseButton.addEventListener('click', () => {
  controls.reset()
  timer.pause()
  sound.playAudio(sound.buttonPress)
})
stopButton.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.playAudio(sound.buttonPress)
})
addButton.addEventListener('click', () => {
  timer.addMinutes()
  sound.playAudio(sound.buttonPress)
})
minusButton.addEventListener('click', () => {
  timer.decreaseMinutes()
  sound.playAudio(sound.buttonPress)
})

forestSoundButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  if (forestSoundButton.classList.contains('off')) {
    controls.changeButtonBG(forestSoundButton)
    sound.playAudio(sound.forest)
  } else {
    controls.changeButtonBG(forestSoundButton)
    sound.pauseAudio(sound.forest)
  }
})
rainSoundButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  if (rainSoundButton.classList.contains('off')) {
    controls.changeButtonBG(rainSoundButton)
    sound.playAudio(sound.rain)
  } else {
    controls.changeButtonBG(rainSoundButton)
    sound.pauseAudio(sound.rain)
  }
})
coffeehouseSoundButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  if (coffeehouseSoundButton.classList.contains('off')) {
    controls.changeButtonBG(coffeehouseSoundButton)
    sound.playAudio(sound.coffeehouse)
  } else {
    controls.changeButtonBG(coffeehouseSoundButton)
    sound.pauseAudio(sound.coffeehouse)
  }
})
fireplaceSoundButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  if (fireplaceSoundButton.classList.contains('off')) {
    controls.changeButtonBG(fireplaceSoundButton)
    sound.playAudio(sound.fireplace)
  } else {
    controls.changeButtonBG(fireplaceSoundButton)
    sound.pauseAudio(sound.fireplace)
  }
})

themeLightButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  controls.lightToDarkButton()
}) 
themeDarkButton.addEventListener('click', () => {
  sound.playAudio(sound.buttonPress)
  controls.darkToLightButton()
}) 

forestVolume.addEventListener('input', () => {sound.setVolume(sound.forest, forestVolume.value)})
rainVolume.addEventListener('input', () => {sound.setVolume(sound.rain, rainVolume.value)})
coffeehouseVolume.addEventListener('input', () => {sound.setVolume(sound.coffeehouse, coffeehouseVolume.value)})
fireplaceVolume.addEventListener('input', () => {sound.setVolume(sound.fireplace, fireplaceVolume.value)})