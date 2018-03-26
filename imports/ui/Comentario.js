import React, { Component } from 'react';

export default class Comentario extends Component {

	darPuntos(){
		alert("Se autoriza incremento de puntos en mongo del comentario");
	}

	render() {
		let comentario = this.props.comentario.tarea;
		return (
			<div>
				<p>Usuario que realiza prueba</p>
				<p>{"Número de tarea realizada: "+this.props.comentario.tarea}</p>
				<p>{"Tiempo (en minutos): "+this.props.comentario.tiempo}</p>
				<p>{"Opinión: "+this.props.comentario.opinion}</p>
				<button onClick={this.darPuntos.bind(this)}> Dar puntos</button>
			</div>
		);
	}
}
