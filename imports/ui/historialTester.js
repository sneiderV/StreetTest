import React, { Component } from 'react';
import swal from 'sweetalert';

//-----------Actualización de Meteor ----------------
import { withTracker } from "meteor/react-meteor-data";
//collection
import { Proyectos } from "../api/proyectos.js";
//---------------------------------------------------

export class HistorialTester extends Component {
	
  ingreseCuentaAlert(){
    swal("Ingresa ya!", "Debes ingresar a tu cuenta para realizar esta acción", "error");
    FlowRouter.go("/");
  }

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
      if(!currentUser) this.ingreseCuentaAlert();
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

export default withTracker(()=>{
  //Se suscribe a la publicación de proyectos
  Meteor.subscribe("proyectosNoUsuario");

  return {
    proyectos: Proyectos.find({}, {sort: {createdAt: -1}}).fetch(),
    currentUser: Meteor.user()
  };

})(HistorialTester);