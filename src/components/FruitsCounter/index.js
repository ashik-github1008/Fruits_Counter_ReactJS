// Write your code here
import {Component} from 'react'

import './index.css'


class FruitsCounter extends Component{
    state = {mango: 0, banana: 0}

    onMango = () => {
    this.setState((prevState) => ({ mango: prevState.mango + 1 }))
  }
     onMango = () => {
    this.setState((prevState) => ({ banana: prevState.banana + 1 }))
  }

  render(){
    const { mango, banana } = this.state
    return(
        <div class="main-container">
          <h1>Bob ate {mango} mangoes {banana} bananas</h1>
          <div>
            <div className="mango-container">
              <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png"/>
              <button>Eat Mango</button>
            </div>
            <div className="banana-container">
              <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png"/>
              <button>Eat Banana</button>
            </div>
          </div>
        </div>
    )
  }
}


export default FruitsCounter;