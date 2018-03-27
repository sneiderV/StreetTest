import React, { Component } from 'react';
import {mount} from "react-mounter";
import Comentario from "./Comentario.js";


export default class DetalleProyecto extends Component {

	constructor(props){
    super(props);
    this.state ={
      nroTarea: "",
      tiempoPromedio: this.props.proyecto.comentarios
      	.map((comentario)=>comentario.tiempo)
	      	.reduce((timeA,timeB)=>{
	      		return Number(timeA) + Number(timeB)})/*/this.props.proyecto.comentarios.length*/
    }
  }

  definirTiempoPromedio(_nroTarea)
  {

  	comentarios = this.props.proyecto.comentarios
			.filter((comentario)=>{return comentario.tarea.includes(_nroTarea)})
      	.map((comentario)=>comentario.tiempo)
    if(comentarios.length===0)
    	return 0;
    else{
    	return comentarios
	      	.reduce((timeA,timeB)=>{
	      		return Number(timeA) + Number(timeB)})
    }
  	
  }

	filtroPorNroTarea(evt)
	{
		console.log(evt.target.value)
		this.setState({
			nroTarea : evt.target.value,
			tiempoPromedio: this.definirTiempoPromedio(evt.target.value)
		});
	}

	render() {
		return (
		<div>
		    <div className="jumbotron container">
			
			<h2 className="display-4">Proyecto: {this.props.proyecto.nombre}</h2>
			<p class="lead">En esta sección puedes visualizar los comentarios de los Tester, 
			                 califica su colaboración y aprovecha sus opiniones para mejorar tu proyecto.</p>
            <hr class="my-4"/>	
            <p>Filtra tus comentarios por el numero de tarea en el que quieras prestar mayor atención.</p>
			<div className="form-group"> 
				<input id="ip1" className="form-control" type="text"  placeholder="Ingre el número de la tarea" onInput={this.filtroPorNroTarea.bind(this)}/>
			</div>
			<p className="display-5" >{"El tiempo promedio para esta tarea es: "+this.state.tiempoPromedio+" minutos"}</p>
			
			<div className="container">
				<h4>Listado de comentarios</h4>
				<div className="container">
		 			{this.props.proyecto.comentarios.filter((comentario)=>{return comentario.tarea.includes(this.state.nroTarea)}).map((comentario)=>{
		 				return <Comentario 
		 				key={comentario._id}
		 				comentario={comentario}
		 				/>
		 			})
		 			}
		 		</div>
		 	</div>
		 	</div>
	
		</div>
		);
	}
}