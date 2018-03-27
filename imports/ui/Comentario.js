import React, { Component } from 'react';

export default class Comentario extends Component {

	darPuntos(){
		alert("Se autoriza incremento de puntos en mongo del comentario");
	}

	render() {
		let comentario = this.props.comentario.tarea;
		return (
			<div className="card">
				<h5 className="card-header">Usuario que realiza prueba</h5>
				<div className="card-body">
				<h5 className="card-title">{"Número de tarea realizada: "+this.props.comentario.tarea}</h5>
				<p className="card-text">{"Tiempo (en minutos): "+this.props.comentario.tiempo}</p>
				<p className="card-text">{"Opinión: "+this.props.comentario.opinion}</p>
				<button class="btn btn-success" onClick={this.darPuntos.bind(this)}> Dar puntos</button>
				</div>
			</div>
		);
	}
}
