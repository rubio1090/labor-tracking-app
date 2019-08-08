import React, { Component } from 'react';

export default class DepartmentView extends Component{
  constructor(props){
    super(props);
    this.state={
      directs : ["Inbound Containers", "Inbound Units", "Putaway Pallets", "Transfer Pallets"],
      indirects : ["5S - Housekeeping", "Coordinators", "Clerical and Research", "Special Projects", "Training"]
    }
  }
  render(){
    const {directs, indirects} = this.state;
    return(
      <div className="container">

        <span className="function-type-header">Direct Functions</span>
        <div className="my-3">
          <CardForm functions={directs}/>
        </div>

        <span className="function-type-header">Indirect Functions</span>
        <div className="my-3">
          {/* {indirects.map((indirect, index) => <FunctionLevel functionName={indirect}/> )} */}
        </div>

      </div>
    )
  }
}

class CardForm extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <form>
        {this.props.functions.map(fn => <FunctionLevel functionName={fn}/>)}  
      </form>
    )
  }
}



class FunctionLevel extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
    <div>
      <div className="row">
        <div className="col-12">{this.props.functionName}</div>
      </div>
      <div className="row">

        <div className="col-4">
          <input type="text" className="form-control"/>
        </div>

        <div className="col-4">
          <input type="text" className="form-control"/>
        </div>

        <div className="col-4">
          <input type="text" className="form-control"/>
        </div>

      </div>
    </div>
    )
  }
}

class CustomInput extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <div className="group">
        <input className="custom-input" type="text"/>
        <label className="custom-label">{this.props.placeholder}</label>
      </div>
    )
  }
}
