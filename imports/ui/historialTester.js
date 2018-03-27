import React, { Component } from 'react';
import swal from 'sweetalert';
export default class HistorialTester extends Component {
	
	sumarPuntos(){
		let comentariosProbados = [];
		this.props.proyectos
        .forEach((proyecto)=>{
          for (let i = proyecto.comentarios.length - 1; i >= 0; i--) {
            let comentario = proyecto.comentarios[i];
            probado = comentario.creador === Meteor.userId();
            if(probado) comentariosProbados.push(comentario);
          }
          return probado;
        });
    let suma = 0;
    comentariosProbados.forEach((comentario)=>{
    	suma += comentario.puntaje;
    })
    return suma;
  } 

  redimir(){
    swal("Redimir puntos", "Proximamente estarán disponibles los productos que podra redimir con sus puntos.");
  }

    render() {
        return (
          <div className="historialdiv">
           <div className="container"> 
           		<div className="jumbotron">
                    <h1 className="display-4">{"Usuario: " + Meteor.user().emails[0].address }</h1>
                    <hr className="my-4"/>
                   <center>
                    <p  className="lead">{"Los puntos que ha acumulado hasta el momento en StreetTest son: "}</p>
                    <h1 className="display-4">{this.sumarPuntos()+"."}</h1>
                    <button type="button" className="btn btn-outline-danger" onClick={this.redimir}>Redimir</button>
                   </center>
                </div>
            </div>
          </div>
            );
    }
}