import React, { Component } from 'react';
import swal from 'sweetalert';
import "./swal-forms.css"
import "./swal-forms.js"
import "./sweet-alert.js"
import "./sweet-alert.css"

/**
 * componente que representa cada proyecto en la pantalla "AppTester"
 * Props: key(proyecto._id), proyecto
 **/
 export default class ProyectoTester extends Component {

    // var datos;

    hacerTest(nombreProyecto){
      swal.withForm({
        title: this.props.proyecto.nombre,
        text: 'Por favor ingresa los datos para registrar tu prueba.',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Crear',
            // closeOnConfirm: true,
            formFields: [
            { id: 'tarea', type: 'number', placeholder:'Número de la tarea que quieres realizar.', required: true },
            /*{ id: 'tarea',
            type: 'select',
            options: [
                {value: '1', text: '1'},
                {value: '2', text: '2'}
                ]}*/
            { id: 'tiempo', type: 'number',placeholder:' En MINUTOS, ingresa el tiempo que tomo hacer la tarea .', required: true },
            { id: 'opinion', placeholder:'Danos tu comentario.', required: true }
            ]
            
        }, function(isConfirm) {
            // Aqui estan los datos de los usuarios
            if (isConfirm === true) {

                Meteor.call("comentarios.insert", nombreProyecto, this.swalForm.tarea, this.swalForm.tiempo, this.swalForm.opinion);

                swal("Buen trabajo!", "Tu comentario fue guardado, espera por tus puntos.", "success");
                //swalForm // lanza un objeto con los parametros que fueron ingresados por el usuario
            }
        });
  }


  render() {
      let tareas = this.props.proyecto.tareas;
      return (
         <div>
         <div className="card"> 
         <h5 className="card-header">{this.props.proyecto.nombre}</h5>
         <div className="card-body">
         <h6 className="card-title"><a href={this.props.proyecto.url}>URL del proyecto</a></h6>
         <p className="card-text"><strong>Tareas</strong></p>
         <ol>
         {
            tareas.map(tarea => <li>{tarea.descripcion}</li>)
         }
         </ol>
         <button type="button" className="btn btn-outline-success" onClick={()=>{this.hacerTest(this.props.proyecto.nombre)}}>Test</button>
         </div>
         </div>
         <br/>
         </div>
         );
  }
}
