import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

//Manejo de conexión en Mongo
export const Proyectos = new Mongo.Collection("proyectos");

//"meteor remove autopublish": Como se hizo esto, se debe especificar especificamente qué se envía al cliente.
if (Meteor.isServer) {

	//Trae todos los proyectos que no creé yo (AppTester)
	Meteor.publish("proyectosNoUsuario", function publicacionProyectosNoUsuario(){
		if (!this.userId) {
			throw new Meteor.Error("No autorizado");
		}

		return Proyectos.find({
			 creador: { $ne: this.userId }  
		});
	});

	//Trae solo los proyectos creados por el usuario (AppInnovador)
	Meteor.publish("proyectosUsuario", function publicacionProyectosUsuario(){
		if (!this.userId) {
			throw new Meteor.Error("No autorizado");
		}
		return Proyectos.find({
			creador: this.userId
		});
	});

	//Trae solo los proyectos con comentarios creados por el usuario (HistorialTester)
	Meteor.publish("proyectosComentadosUsuario", function publicacionComentariosUsuario(){
		if (!this.userId) {
			throw new Meteor.Error("No autorizado");
		}
		let proyectosComUs = Proyectos.find(
		{ //Solo los comentarios creador por el tester actual
			"comentarios.creador":this.userId
		}
		);

		return proyectosComUs;
	});
}
//Definición de metodos (se hizo "meteor remove insecure" y es necesario definirlos para seguridad)
Meteor.methods({
	"proyectos.insert"(nombre, url, tema, descripcion, tarea1, tarea2, tarea3) {

		//asegurarse de que este loggeado para poder ingresar un proyecto
		if (!this.userId) {
			throw new Meteor.Error("No autorizado");
		}

		check(nombre, String);
		check(url, String);
		check(tema, String);
		check(descripcion, String);
		check(tarea1, String);

		//A partir de las tareas ingresadas se crea arreglo de tareas
		let tareas = []
		tareas.push(tarea1);
		if(tarea2) {
			check(tarea2,String);
			tareas.push(tarea2);	
		}
		if(tarea3) {
			check(tarea3,String);
			tareas.push(tarea3);	
		}
		let comentarios = [];
		Proyectos.insert({
			nombre,
			url,
			tema,
			descripcion,
			tareas,
			comentarios,
			creador: this.userId
		});
	},
	//inserta comentario del proyecto, sin modificar puntajes
	"comentarios.insert"(nombre, tarea, tiempo, opinion){
		check(nombre, String);
		check(tarea, Number);
		check(tiempo, Number);
		check(opinion, String);

		if (!this.userId) {
			throw new Meteor.Error("No autorizado");
		}

		//buscar proyecto por nombre
		//insertar comentario en arreglo de ese único proyecto
		Proyectos.update(
		  { nombre: nombre },
		  { $push: { comentarios: 
		  							{
		  								tarea,
		  								tiempo,
		  								opinion,
		  								creador: this.userId,
		  								puntaje: 0
		  							} 
							} 
		 	}
		)
	},
	//recordar que el puntaje que se le asigna a un usuario es el mismo numero de la tarea
	"asignarPuntaje"(nombreProyecto,testerId,numTarea){
		check(testerId, String);
		check(nombreProyecto, String);
		check(numTarea,Number);
		var pun = parseInt(numTarea);
		Proyectos.update(
			{
				nombre : nombreProyecto ,
				creador : this.userId,
				comentarios:
				{ $elemMatch: 
					{ 
						tarea: numTarea, 
						creador: testerId 
					} 
				}			
			} , 
			{
				$set: 
				{
					"comentarios.$.puntaje": pun
				}
			}
			);
	},
	"misPuntos"(){

	}
});


