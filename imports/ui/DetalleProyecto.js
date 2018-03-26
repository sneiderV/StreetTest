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
				<h2>Proyecto: {this.props.proyecto.nombre}</h2>
				<h4>Filtros</h4>
					<div className="form-group"> 
						<label className="bmd-label-floating">Número de tarea</label>
						<input id="ip1" className="form-control" type="text"  onInput={this.filtroPorNroTarea.bind(this)}/>
					</div>
				<p>{"El tiempo promedio es: "+this.state.tiempoPromedio}</p>
				<h4>Listado de tareas</h4>
				<div>
		 			{this.props.proyecto.comentarios.filter((comentario)=>{return comentario.tarea.includes(this.state.nroTarea)}).map((comentario)=>{
		 				return <Comentario 
		 				key={comentario._id}
		 				comentario={comentario}
		 				/>
		 			})
		 			}
		 		</div>

			</div>
		);
	}
}
