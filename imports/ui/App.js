import React, { Component } from 'react';
import {mount} from "react-mounter";
import AppInnovador from "./AppInnovador.js";
import AppTester from "./AppTester.js";
import "./css/app.css"
import swal from 'sweetalert';

//Manejo de sign in/up
import AccountsUI from "./AccountsUI";



/**
 * Componente de pantalla principal
 * props(withTracker): proyectos, currentUser
 **/
export default class App extends Component {

	ingreseCuentaAlert(){
		swal("Ingresa ya!", "Debes ingresar a tu cuenta para realizar esta acción", "error");
	}

	cambiarPantallaInnovador(){

		Meteor.user() ?
		 	FlowRouter.go("/AppInnovador")
			// mount(AppInnovador)
		:	this.ingreseCuentaAlert();
	}

	cambiarPantallaTester(){
		Meteor.user() ?
			// mount(AppTester)
			FlowRouter.go("/AppTester")
		:	this.ingreseCuentaAlert();
	}

	render() {
		return (
			// se diseña parte comun s
		<div className="iniciodiv">
			<div className="container">
				<div>
					<br/><br/><br/><br/>
					<p className="line-1 anim-typewriter">Publica o realiza un Test de proyectos innovadores.</p>
				</div>
				<div className="row">
				<div className="col-sm"></div>
				<div className="col-sm">
					<br/><br/>
					<div className="cuadroInicio">
					<center>
					<br/><br/>
					<h1 className="display-4">Street Test</h1>
					<br/>
					<h4>Quieres ingresar como:</h4>
					{/*botones de cada uno llevan  a pantallas de login distinto, se debe pasr por parámetro el rol*/}
					<button id="Innovador" className="btn btn-lg" onClick={this.cambiarPantallaInnovador.bind(this)}>Innovador</button>
					<span>                                                                      </span>
					<button id="Tester" className="btn btn-lg" onClick={this.cambiarPantallaTester.bind(this)}>Tester</button>
					<br/><br/>
					</center>
					</div>
					<br/><br/><br/><br/><br/><br/><br/>
				</div>
				<div className="col-sm"></div>
				</div>
			</div>
		</div>
			);
	}
}

