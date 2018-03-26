import React, { Component } from 'react';
import {mount} from "react-mounter";
import DetalleProyecto from "./DetalleProyecto.js"

/**
 * componente que representa cada proyecto en la pantalla "AppInnovador"
 * Props: key(proyecto._id), proyecto
 **/
export default class ProyectoInnovador extends Component {

	verDetalleProyecto(){
		mount(DetalleProyecto,{proyecto: this.props.proyecto});
	}


	render() {
		return (
			<div>
				<div className="cuadroProyectoInnovador"> 
					<h6><strong>{this.props.proyecto.nombre}</strong></h6>
					<a href={this.props.proyecto.url}>URL del proyecto</a>
					<p className="tareas">{"Tareas: "+ this.props.proyecto.tareas}</p>
					<button type="button" onClick={this.verDetalleProyecto.bind(this)} >Ver detalle</button>
				</div>
				<br/>
			</div>
		);
	}
}
