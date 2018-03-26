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

	hacerTest(){
		swal.withForm({
            title: 'Nombre del proyecto',
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
                swal("Buen trabajo!", "Tu comentario fue guardado, espera por tus puntos.", "success");
                console.log(this.swalForm) // lanza un objeto con los parametros que fueron ingresados por el usuario
            }
        });
	}


	render() {
		return (
			<div>
				<div className="cuadroProyectoInnovador"> 
					<h6><strong>{this.props.proyecto.nombre}</strong></h6>
					<a href={this.props.proyecto.url}>URL del proyecto</a>
					<p className="tareas">{"Tareas: "+ this.props.proyecto.tareas}</p>
					<button type="button" onClick={this.hacerTest}>Test</button>
				</div>
				<br/>
			</div>
		);
	}
}