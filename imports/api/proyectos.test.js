import { Meteor } from "meteor/meteor";
//Para borrar datos de DB
import { resetDatabase } from "meteor/xolvio:cleaner";
//npm package para usar Factories y crear random test data
import faker from "faker";

import { Proyectos } from "./proyectos.js";



if(Meteor.isServer){
	describe("Proyectos", function () {
		//Se crea la factory que genera un nuevo documento proyecto
		before(function(){
			faker.locale="es_MX";

			Factory.define("proyecto", Proyectos, {
				nombre:() => faker.name.findName(),
				// url,
				// tema,
				// descripcion: () => faker.lorem.sentence(),
				// tareas,
				// comentarios,
				// creador,
				// listId: () => Factory.get("list"),
				// createdAt: () => new Date(),
			});
		})
		describe("publish", function(){
			// Ejecutar antes de todo
			before(function(){
				resetDatabase();
				let pry = Factory.create("proyecto");
				console.log("proyecto creado: "+JSON.stringify(pry));
			})

			it("Solo publica proyectos del usuario ingresado", function () {
		    // This code will be executed by the test driver when the app is started
		    // in the correct mode
		  })	
		  it("Publica proyectos excepto los del usuario ingresado", function () {
		    // This code will be executed by the test driver when the app is started
		    // in the correct mode
		  })	
		  it("Solo publica proyectos donde el usuario comentó", function () {
		    // This code will be executed by the test driver when the app is started
		    // in the correct mode
		  })	
		})
	})
}
