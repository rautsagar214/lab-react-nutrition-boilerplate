import React, { Component } from 'react'
import "./FoodBox.css"




export default class FoodBox extends Component {
    constructor(){
        super()
        this.state={
            CountNo:0,
            CountCals:0
        }
    }
  render() {
    let {CountNo,CountCals}=this.state;

    let handleQuantity = (event)=>{
        this.setState({CountNo:event.target.value})
    }

    let handleReset = ()=>{
        this.setState({CountNo:0})
        this.setState({CountCals:0})
    }

    let handleCal = ()=>{
        this.setState({CountCals:this.state.CountNo*this.props.cal})
    }

    console.log(this.props)
    return (
      <>
           
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.img} width={"100px"} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.cal}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number"  placeholder='Enter the number' value={this.state.CountNo} onChange={handleQuantity} />
        </div>
        <div className="control">
          <button className="button is-info"  onClick={handleCal} >
            +
          </button>
        </div>
      </div>
    </div>
  </article>
  <div>
    <h2>
        {CountNo} {this.props.name} = {CountCals} Calories
    </h2>
  </div>
  <div>
    <button onClick={handleReset} >RESET</button>
  </div>
</div>
      </>
    )
  }
}
