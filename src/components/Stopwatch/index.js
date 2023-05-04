// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  startTimer = () => {
    this.timerId = setInterval(this.increaseCount, 1000)
  }

  increaseCount = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({minutes: prevState.minutes + 1, seconds: 0}))
    } else {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }
  }

  pauseCount = () => {
    clearInterval(this.timerId)
  }

  resetCount = () => {
    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0})
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-card">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="counter">
            {minutes < 10 && '0'}
            {minutes}:{seconds < 10 && '0'}
            {seconds}
          </h1>
          <div className="button-container">
            <button
              type="button"
              className="start-btn"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="stop-btn"
              onClick={this.pauseCount}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={this.resetCount}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
