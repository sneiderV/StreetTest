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
			<div className="card">
				<h5 className="card-header">{this.props.proyecto.nombre}</h5>
				<div className="card-body"> 
					<h6 className="card-title"><a href={this.props.proyecto.url}>URL del proyecto</a></h6>
					<p className="tareas">{"Tareas: "+ this.props.proyecto.tareas}</p>
					<button type="button" className="btn btn-outline-info" onClick={this.verDetalleProyecto.bind(this)} >Ver detalle</button>
				</div>
			</div>
			<br/>
		</div>
		);
	}
}
