import React, { Component } from 'react'
import FoodBox from './Components/FoodBox'
import FoodData from './resources/FoodData'



export default class App extends Component {
  constructor(){
    super()
    this.state={
      newArr:FoodData
    }
  }
  render() {
    
    let {newArr}=this.state;

    let handleChange = (event)=>{
      console.log(event.target.value)

      let filteredData = FoodData.filter((el,i)=>el.name.includes(event.target.value))

      this.setState({newArr:filteredData})
    }
    return (
      <div>
        <div>
          <input type="text" placeholder='search food here' onChange={handleChange} />
        </div>
        {
          
        newArr.map((el,i)=>(
            <FoodBox key={i} {...el} />
          ))
        }
      </div>
    )
  }
}

{/* <FoodBox/> */}