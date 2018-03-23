import React, { Component } from 'react';
import {mount} from "react-mounter";
import AppInnovador from "./AppInnovador.js";

import { withTracker } from "meteor/react-meteor-data";

//collection
import { Proyectos } from "../api/proyectos.js";

/**
 * Componente de pantalla principal
 * props(withTracker): proyectos, currentUser
 **/
export class App extends Component {

	cambiarPantalla(){
		 // FlowRouter.go("/appinnovador");
		mount(AppInnovador,{proyectos: this.props.proyectos})

	}

	render() {
		
		return (
			// se diseña parte comun 
			<div>
				<h1>Street Test</h1>
				<h4>Quieres ingresar como:</h4>
				{/*botones de cada uno llevan  a pantallas de login distinto, se debe pasr por parámetro el rol*/}
				<button id="Innovador" onClick={this.cambiarPantalla.bind(this)}>Innovador</button>
				<button id="Tester" >Tester</button>
				
			</div>
			);
	}
}

export default withTracker(()=>{
	//Se suscribe a la publicación de proyectos
	Meteor.subscribe("proyectos");

	return {
		proyectos: Proyectos.find({}, {sort: {createdAt: -1}}).fetch(),
		currentUser: Meteor.user()
	};

})(App);
