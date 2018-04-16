import React, { Component } from 'react';
import {mount} from "react-mounter";
import AppInnovador from "./AppInnovador.js";
import AppTester from "./AppTester.js";
import "./css/app.css"
import swal from 'sweetalert';

/*Como este es su componente principal, aca podria usar landmarks para favorecer la usabilidad*/
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
				<div className="col-sm">
					<br/><br/>
					<div className="cuadroInicio">
					<center>
					<br/><br/>
					<h1 className="display-4">Street Test</h1>
					<br/>
					<h4>Quieres ingresar como:</h4>
					<br/><br/><br/>
					<div className="row">
						<div className="col-2"></div>
						<div className="col">
							<button id="buttonInnovador" className="btn btn-lg" onClick={this.cambiarPantallaInnovador.bind(this)}>Innovador</button>
							<h5>Ingresa tus páginas y permite que interesados realicen pruebas de usabilidad</h5>
						</div>
						<div className="col">
							<button id="buttonTester" className="btn btn-lg" onClick={this.cambiarPantallaTester.bind(this)}>Tester</button>
							<h5>Prueba aplicaciones web de innovadores, gana puntos y consigue premios!</h5>
						</div>
						<div className="col-2"></div>
					</div>
					<br/><br/>
					</center>
					</div>
					<br/><br/><br/><br/><br/><br/><br/>
				</div>
				</div>
			</div>
		</div>
			);
	}
}

