import React, { Component } from 'react';

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
    console.log("comentarios probados: " + JSON.stringify(comentariosProbados));
    comentariosProbados.forEach((comentario)=>{
    	suma += comentario.puntaje;
    })
    return suma;

	}	

  render() {
      return (
          <div>
          <h1>{"Usuario: " + Meteor.user().emails[0].address }</h1>
          <h3>{"Total de puntos: " + this.sumarPuntos()}</h3>

          <h5>Estos son los puntos acumulados en StreetTest. </h5>


          </div>
          );
  }
}