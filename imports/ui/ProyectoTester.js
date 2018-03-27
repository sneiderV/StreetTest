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
            text: 'Porfavor ingrese los datos para crear su prueba.',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Crear',
            // closeOnConfirm: true,
            formFields: [
            { id: 'tarea', placeholder:'Número de la tarea que quieres realizar.', required: true },
            { id: 'tiempo', placeholder:'Ingresa el tiempo que tomo hacer la tarea en MINUTOS.', required: true },
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

    hacerTest1(){

    }

	render() {
		return (
			<div>
				<div className="card"> 
					<h5 className="card-header">{this.props.proyecto.nombre}</h5>
					<div className="card-body">
                     <h6 className="card-title"><a href={this.props.proyecto.url}>URL del proyecto</a></h6>
					 <p className="card-text"><strong>Tareas</strong>{this.props.proyecto.tareas}</p>
					 <button type="button" class="btn btn-outline-success" onClick={()=>{this.hacerTest(this.props.proyecto.nombre)}}>Test</button>
                    </div>
				</div>
				<br/>
			</div>
		);
	}
}