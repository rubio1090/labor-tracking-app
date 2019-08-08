import React, { Component } from 'react'

export default class DepartmentCard extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  // For dev only
  randomHdc=()=>{
    return Math.floor(Math.random() * (12 - 30) + 12);
  }

  // For dev only
  randomHourCall=()=>{
    return Math.floor(Math.random() * (7 - 12) + 7);
  }

  render(){
    return(
      <div className="dept-card col-4">
        <div className="card-inner">
          <span className="dept-name-label">{this.props.name}</span>
          <hr/>
          <div>
            <span>
              <i className="fa fa-users"></i>
            </span>
            <span>{` ` + this.randomHdc()}</span>
            
            <span>  |  </span>

            <span>
              <i className="fa fa-clock"></i>
            </span>
            <span>{` ` + this.randomHourCall()}</span>
          </div>
        </div>
      </div>
    )
  }
}