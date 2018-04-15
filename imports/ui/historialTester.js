import React, { Component } from 'react';
import swal from 'sweetalert';

//-----------Actualización de Meteor ----------------
import { withTracker } from "meteor/react-meteor-data";
//collection
import { Proyectos } from "../api/proyectos.js";
import PremiosTester from "./PremiosTester.js"
//---------------------------------------------------

export class HistorialTester extends Component {

  // constructor(props){
  //   super(props);
  //   this.state ={
  //     comentarios: []
  //   }
  // }

  ingreseCuentaAlert(){
    swal("Ingresa ya!", "Debes ingresar a tu cuenta para realizar esta acción", "error");
    FlowRouter.go("/");
  }

  getComentarios(){
    let comentarios = [];
    this.props.proyectos
        .forEach((proyecto)=>{
          proyecto.comentarios.forEach((comentario)=>{

            probado = comentario.creador === this.props.currentUser._id;
            if(probado) comentarios.push(comentario);
          });

        });
    return comentarios;
  }

	sumarPuntos(){
		let comentarios = this.getComentarios();
    let suma = 0;
    comentarios.forEach((comentario)=>{
    	suma += comentario.puntaje;
    })
    return suma;
  } 

  redimir(){
    swal("Redimir puntos", "Proximamente estarán disponibles los productos que podra redimir con sus puntos.");
  }

  ingreseCuentaAlert(){
      swal("Ingresa ya!", "Debes ingresar a tu cuenta para realizar esta acción", "error");
      FlowRouter.go("/");
  }
        
  irPremios(){
      this.props.currentUser ?
      FlowRouter.go("/PremiosTester")
      :  this.ingreseCuentaAlert();
    }


    renderTareasRealizadas(){
      return this.props.proyectos.map((proyecto)=>{
        return (
          <div><div className="card">
            <h5 className="card-header">{proyecto.nombre}</h5>
            <div className="card-body">
                {proyecto.comentarios.filter((c)=>c.creador===this.props.currentUser._id)
                  .map((comentario)=>(
                    <div>
                        <strong className="card-title">{"tarea: "+comentario.tarea}</strong>
                        <p className="card-text">
                          {"opinion: "+comentario.opinion} <br/>
                          {"puntaje: "+comentario.puntaje} <br/>
                          {"tiempo: "+comentario.tiempo+" minutos"}
                        </p>
                        <br/>
                    </div>
                    ))}
            </div>
          </div>
          <br/></div>);
      });
    }

    render() {
      if(!this.props.currentUser) this.ingreseCuentaAlert();
      return (
        <div className="historialdiv">
         <div className="container"> 
         		<div className="jumbotron">
                  <h1 className="display-4">{"Usuario: " + this.props.currentUser.emails[0].address }</h1>
                  <hr className="my-4"/>
                 <center>
                  <p  className="lead">{"Los puntos que ha acumulado hasta el momento en StreetTest son: "}</p>
                  <h1 className="display-4">{this.sumarPuntos()+"."}</h1>
                  <button type="button" className="btn btn-outline-danger" onClick={this.irPremios.bind(this)}>Redimir</button>
                 </center>
                 <br/>
                 <h4>Tareas Realizadas</h4>
                   {this.renderTareasRealizadas()}
              </div>
          </div>
        </div>
          );
    }
}

export default withTracker(()=>{
  //Se suscribe a la publicación de proyectos
  Meteor.subscribe("proyectosComentadosUsuario");

  return {
    proyectos: Proyectos.find({}, {sort: {createdAt: -1}}).fetch(),
    currentUser: Meteor.user()
  };

})(HistorialTester);