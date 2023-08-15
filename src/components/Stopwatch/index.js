import {Component} from 'react'
import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  clearTimerInterval = () => {
    clearInterval(this.intervalId)
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStaringTimer = () => {
    this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  }

  onStoppingTimer = () => {
    this.clearTimerInterval()
  }

  onResettingTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  getTimerValue = () => {
    const {timeElapsedInSeconds} = this.state

    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    const minutesValue = minutes > 9 ? minutes : `0${minutes}`
    const secondsValue = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesValue}:${secondsValue}`
  }

  render() {
    const {timeElapsedInSeconds} = this.state
    console.log(timeElapsedInSeconds)

    return (
      <div className="bg-container">
        <div className="heading-and-timer-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-icon-text">
              <img
                className="timer-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer-value">{this.getTimerValue()}</h1>
            <div className="control-buttons-container">
              <button
                className="start-button control-buttons"
                type="button"
                onClick={this.onStaringTimer}
              >
                Start
              </button>
              <button
                className="stop-button control-buttons"
                type="button"
                onClick={this.onStoppingTimer}
              >
                Stop
              </button>
              <button
                className="reset-button control-buttons"
                type="button"
                onClick={this.onResettingTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
