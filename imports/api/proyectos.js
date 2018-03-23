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