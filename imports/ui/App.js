import React, { Component } from 'react';
import {mount} from "react-mounter";
import AppInnovador from "./AppInnovador.js";
import AppTester from "./AppTester.js";
import "./css/app.css"
import { withTracker } from "meteor/react-meteor-data";

//collection
import { Proyectos } from "../api/proyectos.js";

/**
 * Componente de pantalla principal
 * props(withTracker): proyectos, currentUser
 **/
export class App extends Component {

	cambiarPantallaInnovador(){
		 // FlowRouter.go("/appinnovador");
		mount(AppInnovador,{proyectos: this.props.proyectos})
	}

	cambiarPantallaTester(){
		 // FlowRouter.go("/appinnovador");
		mount(AppTester,{proyectos: this.props.proyectos})
	}

	render() {
		
		return (
			// se diseña parte comun s
			<div>
				<div>
				<h1>Street Test</h1>
				<h4>Quieres ingresar como:</h4>
				{/*botones de cada uno llevan  a pantallas de login distinto, se debe pasr por parámetro el rol*/}
				<center>
				<button id="Innovador" onClick={this.cambiarPantallaInnovador.bind(this)}>Innovador</button>
				<span>                                                                      </span>
				<button id="Tester" onClick={this.cambiarPantallaTester.bind(this)}>Tester</button>
				</center>
				</div>
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
