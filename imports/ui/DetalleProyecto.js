import React, { Component } from 'react';
import {mount} from "react-mounter";
import Comentario from "./Comentario.js";


export default class DetalleProyecto extends Component {

	constructor(props){
    super(props);
    let comentarios = this.props.proyecto.comentarios;
    let tPromedio = comentarios.length<=0 ? 0
    							: comentarios.map((comentario)=>comentario.tiempo)
													      	.reduce((timeA,timeB)=>{
													      		return Number(timeA) + Number(timeB)})/comentarios.length;
    this.state ={
      nroTarea: "",
      tiempoPromedio: tPromedio
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
		<div className="historialdiv">
		    <div className="jumbotron container">
			
			<h2 className="display-4">Proyecto: {this.props.proyecto.nombre}</h2>
			<p class="lead">En esta sección puedes visualizar los comentarios de los Tester, 
			                 califica su colaboración y aprovecha sus opiniones para mejorar tu proyecto.</p>
            <hr class="my-4"/>	
            <p>Filtra tus comentarios por el numero de tarea en el que quieras prestar mayor atención.</p>
			<div className="form-group"> 
				<input id="ip1" className="form-control" type="text"  placeholder="Ingrese el número de la tarea" onInput={this.filtroPorNroTarea.bind(this)}/>
			</div>
			<p className="display-5" >{"El tiempo promedio para esta tarea es: "+this.state.tiempoPromedio+" minutos"}</p>
			
			<div className="container">
				<h4>Listado de comentarios</h4>
				<div className="container">
		 			{this.props.proyecto.comentarios.filter((comentario)=>{return comentario.tarea.includes(this.state.nroTarea)}).map((comentario)=>{
		 				// console.log("comentario_id: ", comentario._id)
		 				return <Comentario 
		 				key={comentario._id}
		 				comentario={comentario}
		 				nombreProyecto={this.props.proyecto.nombre}
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
