import { Meteor } from "meteor/meteor";
//Para borrar datos de DB
import { resetDatabase } from "meteor/xolvio:cleaner";
//npm package para usar Factories y crear random test data
import faker from "faker";
//Para probar publicaciones sin hacer el subscribe de siempre
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
//asserts (duh!)
import { assert } from "chai";
// local collection para el cliente
import StubCollections from 'meteor/hwillson:stub-collections';

import { Proyectos } from "./proyectos.js";



// if(Meteor.isServer)
{
	describe("Proyectos", function () {
		//Se crea la factory que genera un nuevo documento proyecto
		before(function(){
			faker.locale="es_MX";

			//Se crean minimo 1, máximo 3 tareas para el proyecto
			let tareasArray = [faker.lorem.sentence()];
			let numMaxTareas = 3;
			for (var i = 1; i < numMaxTareas; i++) {
				let num = Math.random();
				if (num < 0.5) (tareasArray.push(faker.lorem.sentence()));
			}

			// Creación de comentario

			// Factory de Proyecto
			Factory.define("proyecto", Proyectos, {
				nombre:() => faker.internet.domainWord(),
				url:()=> faker.internet.url(),
				tema:()=> faker.lorem.words(),
				descripcion: () => faker.lorem.sentence(),
				tareas: ()=>tareasArray,
				comentarios:()=>[],
				creador: ()=>faker.random.uuid(),
			});
		})
		describe("publish", function(){
			// Ejecutar antes de todo
			before(function(){
				resetDatabase();
				let pry = {};
				if(Meteor.isServer)	pry = Factory.create("proyecto");
				else{
					pry = Factory.build("proyecto");
					StubCollections.stub(Proyectos);
					Proyectos.insert({ pry: 'document' });
					StubCollections.restore();
				}
				console.log("proyecto creado: "+JSON.stringify(pry));
			})

			it("Solo publica proyectos del usuario ingresado", function () {
				// Set a user id that will be provided to the publish function as "this.userId",
				// in case you want to test authentication.
				// const collector = new PublicationCollector({userId: 'some-id'});

				// // Collect the data published from the "proyectosUsuario" publication.
				// collector.collect('proyectosUsuario', (collections) => {
					// "collections" is a dictionary with collection names as keys,
					// and their published documents as values in an array.
					// Here, documents from the collection 'Lists' are published.
					// assert.typeOf(collections.proyectos, 'array', "No recibe arreglo");
					// assert.equal(1, 2, "no son iguales");
					done();
				// });
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
