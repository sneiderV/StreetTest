import React, { Component } from 'react';
import ProyectoInnovador from "./ProyectoInnovador.js";
import swal from 'sweetalert';
import "./swal-forms.css"
import "./swal-forms.js"
import "./sweet-alert.js"
import "./sweet-alert.css"

/**
 * Componente que representa la pantalla "AppInnovador"
 * props: proyectos
 **/
 export default class AppInnovador extends Component {

 	pop(){
 		    swal.withForm({
            title: 'Crear Proyecto',
            text: 'Porfavor ingrese los datos para crear su proyecto.',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Crear',
            // closeOnConfirm: true,
            formFields: [
            { id: 'nombre', placeholder:'Nombre del Proyecto', required: true },
            { id: 'url', placeholder:'Ingresa la URL de tu proyecto', required: true },
            { id: 'tema', placeholder:'Tema general', required: true },
            { id: 'descripcion', placeholder:'Ingrese una breve descripción', required: true },
            { id: 'tareas', placeholder:'Agregue las tareas que desea que se realicen', required: true }
            ]
            
        }, function(isConfirm) {
            // Aqui estan los datos de los usuarios
            if (isConfirm === true) {
                // Hace insert a collection
                Meteor.call("proyectos.insert", this.swalForm.nombre, this.swalForm.url, 
                    this.swalForm.tema, this.swalForm.descripcion, this.swalForm.tareas);

                swal("Buen trabajo!", "Tu proyecto fue creado, espara por los comentarios", "success");
                console.log(this.swalForm); // lanza un objeto con los parametros que fueron ingresados por el usuario
            }
        });
 	}

 	render() {
 		return (
 			<div> 
 			ERES UN INNOVADOR 
 			<h3>Proyectos (de prueba)</h3>
 			<button id="crear" onClick={this.pop}>Crear</button>
 			<div>
 			{this.props.proyectos.map((proyecto)=>{
 				return <ProyectoInnovador 
 				key={proyecto._id}
 				proyecto={proyecto}
 				/>
 			})
 		}
 		</div>
 		</div>

 		);
 	}
 }
