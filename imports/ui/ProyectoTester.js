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
        //arreglo de objetos: {value:"#tarea", text: "tarea #: descripcion"}
        let tareas = this.props.proyecto.tareas.map((tarea,index)=>{
                        let value=index+1;
                        let text ="Tarea "+value+": "+tarea;
                        return { value, text};
                    });
      swal.withForm({
        title: '<a href="'+this.props.proyecto.url+'">'+this.props.proyecto.nombre+'</a>',
        text: 'Por favor ingresa los datos para registrar tu prueba.',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Crear',
            // closeOnConfirm: true,
            formFields: [
            { id: 'tarea',
                type: 'select',
                options: tareas
            },
            
            { id: 'tiempo', type: 'number',placeholder:' En MINUTOS, ingresa el tiempo que tomo hacer la tarea .', required: true },
            { id: 'opinion', placeholder:'Danos tu comentario.', required: true }
            ]
            
        }, function(isConfirm) {
            // Aqui estan los datos de los usuarios
            if (isConfirm === true) {

                Meteor.call("comentarios.insert", nombreProyecto, Number(this.swalForm.tarea), Number(this.swalForm.tiempo), this.swalForm.opinion);

                swal("Buen trabajo!", "Tu comentario fue guardado, espera por tus puntos.", "success");
                //swalForm // lanza un objeto con los parametros que fueron ingresados por el usuario
            }
        });
  }

  renderTareasProyecto(){


    return (
        <ul>
        {
            this.props.proyecto.tareas.map((tarea,index)=>
                <li><i>{"Tarea "+(index+1)+": "}</i>{tarea}</li>
            )
        }
        </ul>
    );
  }

  render() {
      return (
         <div>
         <div className="card"> 
         <h5 className="card-header">{this.props.proyecto.nombre}</h5>
         <div className="card-body">
         <h6 className="card-title"><a href={this.props.proyecto.url}>URL del proyecto</a></h6>
         <p className="card-text"><strong>Tareas</strong>{this.renderTareasProyecto()}</p>
         <button type="button" className="btn btn-outline-success" onClick={()=>{this.hacerTest(this.props.proyecto.nombre)}}>Test</button>
         </div>
         </div>
         <br/>
         </div>
         );
  }
}