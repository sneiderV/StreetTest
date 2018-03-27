import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

//Manejo de conexión en Mongo
export const Proyectos = new Mongo.Collection("proyectos");

//"meteor remove autopublish": Como se hizo esto, se debe especificar especificamente qué se envía al cliente.
if (Meteor.isServer) {

	Meteor.publish("proyectos", function publicacionProyectos(){

		//Trae todos los proyectos
		return Proyectos.find();
	});
}

//Definición de metodos (se hizo "meteor remove insecure" y es necesario definirlos para seguridad)
Meteor.methods({
	"proyectos.insert"(nombre, url, tema, descripcion, tareas) {

		check(nombre, String);
		check(url, String);
		check(tema, String);
		check(descripcion, String);
		check(tareas, String);


		let comentarios = [];
		Proyectos.insert({
			nombre,
			url,
			tema,
			descripcion,
			tareas,
			comentarios
		});
	},
	//inserta comentario del proyecto, sin modificar puntajes
	"comentarios.insert"(nombre, tarea, tiempo, opinion){
		check(nombre, String);
		check(tarea, String);
		check(tiempo, String);
		check(opinion, String);

		//buscar proyecto por nombre
		//insertar comentario en arreglo de ese único proyecto
		Proyectos.update(
		  { nombre: nombre },
		  { $push: { comentarios: 
		  							{
		  								tarea,
		  								tiempo,
		  								opinion
		  							} 
							} 
		 	}
		)
	},
	//recordar que el puntaje que se le asigna a un usuario es el mismo numero de la tarea
	"asignarPuntaje"(nombreProyecto,nombreUsuario,puntaje){
		check(nombreUsuario, String);
		check(nombreProyecto, String);
		check(puntaje,String);
		var pun = parseInt(puntaje);
		Proyectos.update(
			{nombreProyecto:nombreProyecto, comentarios.propietario: nombreUsuario},
			{ $set: {
					comentarios.puntaje:puntaje;
				}
			}
		)

	},
	"misPuntos"(nombreUsuario){

	}
});