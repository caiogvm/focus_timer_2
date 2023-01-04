import Sound from './sound.js'
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let minutes = minutesDisplay.textContent
  let timerTimeout


  function pause() {
    clearTimeout(timerTimeout)
  }
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
  }
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  function countdown() {
    timerTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = (minutes == 0) && (seconds == 0)
  
      if (isFinished) {
        resetControls()
        reset()
        Sound().playAudio(Sound().kitchenTimer)
        return
      }
      if (seconds == 0) {
        seconds = 60
        --minutes
        updateDisplay(minutes, seconds)
      }
  
      --seconds
      updateDisplay(minutes, seconds)
      countdown()
    }, 1000)
  }
  function addMinutes() {
    if (minutesDisplay.textContent <= 55) {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
      return
    }
    minutesDisplay.textContent = '60'
    secondsDisplay.textContent = '00'
  }
  function decreaseMinutes() {
    if (minutesDisplay.textContent >= 10) {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
      return
    } 
    if (minutesDisplay.textContent > 5) {
      minutesDisplay.textContent = '05'
      secondsDisplay.textContent = '00'
    }
  }
  return {
    pause,
    countdown,
    reset,
    addMinutes,
    decreaseMinutes
  }
} 