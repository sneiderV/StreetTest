import React, { Component } from 'react';
import {mount} from "react-mounter";
import AppInnovador from "./AppInnovador.js";

export default class App extends Component {

	cambiarPantalla(){
		 // FlowRouter.go("/appinnovador");
		mount(AppInnovador,{name: 'Whatever'})

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
