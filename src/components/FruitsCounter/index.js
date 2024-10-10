// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }
  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="card-inside-container">
        <h1 className="heading">
          Bob ate {mango} mangoes {banana} bananas
        </h1>
        <div className="fruits-container">
          <div className="fruit-card-container mango-container">
            <div>
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"
              />
            </div>
            <button className="eat-btn" onClick={this.onMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit-card-container">
            <div>
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"
              />
            </div>
            <button className="eat-btn" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
