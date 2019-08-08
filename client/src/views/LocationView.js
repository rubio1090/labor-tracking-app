import React, { Component } from 'react';
import DepartmentCard from './DepartmentCard';

export default class LocationView extends Component{
  constructor(props){
    super(props);
    this.state={
      departments : ["Brodiaea", "Nandina", "Receiving", "Putaway", "Replenishment", "PTL", "Case Pick", "Non Con", "DTC", "Shipping"]
    }
  }
  render(){
    const {departments} = this.state;
    return(
      <div className="container">
        <div className="row py-3">

          {departments.map( department => <DepartmentCard name={department}/>)}

        </div>
      </div>
      
    )
  }
}
