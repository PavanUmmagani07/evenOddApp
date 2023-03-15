// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="app-container">
          <h1 className="Title">Count 0</h1>
          <p className="paragraph">Count is Even</p>
          <div className="button-container">
            <button className="button" type="button">
              Increment
            </button>
          </div>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
