import React, { Component } from 'react';

/**
 * componente que representa cada proyecto en la pantalla "AppInnovador"
 * Props: key(proyecto._id), proyecto
 **/
export default class ProyectoInnovador extends Component {

	verDetallesProyecto(){
		alert("se visualizarán detalles del proyecto");
	}


	render() {
		return (
			<div>
				<div className="cuadroProyectoInnovador"> 
					<h6><strong>{this.props.proyecto.nombre}</strong></h6>
					<a href={this.props.proyecto.url}>URL del proyecto</a>
					<p className="tareas">{"Tareas: "+ this.props.proyecto.tareas}</p>
					<button type="button" onClick={this.verDetallesProyecto.bind(this)} >Ver detalle</button>
				</div>
				<br/>
			</div>
		);
	}
}
