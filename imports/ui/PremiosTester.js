import React, { Component } from 'react';
//-----------Actualización de Meteor ----------------
import { withTracker } from "meteor/react-meteor-data";

export class PremiosTester extends Component {

	render(){
		if(!Meteor.user()) this.ingreseCuentaAlert();
		return(
			<div className="container">
				<h1>Estos podrian ser tus premios</h1>







			</div>
			);
	}
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user()
  };
})(PremiosTester);