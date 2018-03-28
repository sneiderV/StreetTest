import React, { Component } from 'react';
import swal from 'sweetalert';

export default class Comentario extends Component {

	darPuntos(){
		Meteor.call("asignarPuntaje",this.props.nombreProyecto,this.props.comentario.creador,this.props.comentario.tarea);

		swal("Diste " +this.props.comentario.tarea+ " puntos","El Tester hizo un buen trabajo, ¿verdad?","success");
	}

	render() {
		let comentario = this.props.comentario.tarea;
		return (
			<div className="card">
				<h5 className="card-header">{"Prueba realizada por Tester"}</h5>
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
