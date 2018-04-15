import { Meteor } from "meteor/meteor";
//Para borrar datos de DB
import { resetDatabase } from "meteor/xolvio:cleaner";
//npm package para usar Factories y crear random test data
import faker from "faker";
import { Random } from "meteor/random";
//Para probar publicaciones sin hacer el subscribe de siempre
import { PublicationCollector } from "meteor/johanbrook:publication-collector";
//asserts (duh!)
import { assert } from "chai";
// local collection para el cliente
import StubCollections from "meteor/hwillson:stub-collections";

import { Proyectos } from "./proyectos.js";

// Da objeto comentario a insertar, previamente se debió crear un proyecto
			const crearComentario = function(proyectoDoc){
				// Tarea entre 1 y el maximo (1,2 o 3)
				numTarea = proyectoDoc ? 
				Math.floor(Math.random() * (proyectoDoc.tareas.length)) + 1
				: 1;
				return {
					tarea: numTarea,
					// Microtareas serian entre 1 y 15 minutos
					tiempo: Math.floor(Math.random() * (15)) + 1,
					opinion: faker.lorem.sentence(),
					creador: Random.id(),
					puntaje: 0
				}
			}

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

			
			// Factory de Proyecto sin comentarios
			Factory.define("proyecto", Proyectos, {
				nombre:() => faker.lorem.word(),
				url:()=> faker.internet.url(),
				tema:()=> faker.lorem.words(),
				descripcion: () => faker.lorem.sentence(),
				tareas: ()=>tareasArray,
				comentarios:()=>[],
				// Creador mock, al usar el metodo debe usar otro 
				creador: ()=>Random.id(), 
			});

		})
		if(Meteor.isClient){
			describe("publish", function(){
				// Ejecutar antes de todo
				before(function(){
					resetDatabase();
					let pry = {};
					pry = Factory.build("proyecto");
					StubCollections.stub(Proyectos);
					Proyectos.insert({ pry: "document" });
					StubCollections.restore();
					console.log("proyecto creado: "+JSON.stringify(pry));
				})

				it("Solo publica proyectos del usuario ingresado", function () {
					// Set a user id that will be provided to the publish function as "this.userId",
					// in case you want to test authentication.
					// const collector = new PublicationCollector({userId: "some-id"});

					// // Collect the data published from the "proyectosUsuario" publication.
					// collector.collect("proyectosUsuario", (collections) => {
						// "collections" is a dictionary with collection names as keys,
						// and their published documents as values in an array.
						// Here, documents from the collection "Lists" are published.
						// assert.typeOf(collections.proyectos, "array", "No recibe arreglo");
						// assert.equal(1, 2, "no son iguales");
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
		}
		if (Meteor.isServer){
			describe("methods", function(){
				//user a usar para las pruebas
				const userId = Random.id();

				beforeEach(function(){
					resetDatabase();

				})

				it("Puede insertar nuevo proyecto", function(){
					// Find the internal implementation of the task method so we can
					// test it in isolation
					const crearProyecto = Meteor.server.method_handlers["proyectos.insert"];
					// Set up a fake method invocation that looks like what the method expects
					const invocation = { userId };

					const proyectoTest = Factory.build("proyecto");
					// Run the method with `this` set to the fake invocation
					crearProyecto.apply(invocation, [proyectoTest.nombre, proyectoTest.url, proyectoTest.tema, proyectoTest.descripcion, proyectoTest.tareas[0], proyectoTest.tareas[1], proyectoTest.tareas[2]]);
	 
					// Ahora debe haber un proyecto en la DB
					const proyectosDB = Proyectos.find();
					// console.log("pryDB",typeof(proyectosDB));
					assert.equal(proyectosDB.count(), 1, "Deberia haber solo un proyecto");

					proyectosDB.forEach((doc)=>{assert.equal(doc.creador,userId,"Creador incorrecto")});
				});

				it("Puede insertar nuevo comentario",function(){
					const insertComentario = Meteor.server.method_handlers["comentarios.insert"];
					const invocation = { userId };

					const proyectoTest = Factory.create("proyecto");

					const objComentario = crearComentario(proyectoTest);
					insertComentario.apply(invocation,[proyectoTest.nombre, objComentario.tarea, objComentario.tiempo, objComentario.opinion]);

						const proyectosDB = Proyectos.find({nombre:proyectoTest.nombre});

						Meteor.setTimeout(()=>{},1000);

						// Un proyecto en la DB
						assert.equal(proyectosDB.count(), 1, "Deberia haber solo un proyecto");
						// Un comentario en el proyecto!
						proyectosDB.forEach((doc)=>{
							assert.equal(doc.comentarios.length,1,"Deberia haber 1 comentario")});
				});

				it("Puede asignar puntaje a comentario",function(){
					const asignarPuntaje = Meteor.server.method_handlers["asignarPuntaje"];
					const invocation = { userId };

					const objComentario = crearComentario();
					const proyectoTest = Factory.create("proyecto",{creador:userId, comentarios:[objComentario]});
					console.log("pry:",proyectoTest);

					asignarPuntaje.apply(invocation,[proyectoTest.nombre,objComentario.creador,objComentario.tarea]);

					Meteor.setTimeout(()=>{},1000);

					const proyectosDB = Proyectos.find({
						nombre:proyectoTest.nombre,
						creador:userId
					});
					let puntaje = 0;
					let creadorComentario ="";
					proyectosDB.forEach((doc)=>{
						puntaje=doc.comentarios[0].puntaje;
						creadorComentario = doc.comentarios[0].creador;
					});


					assert.equal(proyectosDB.count(), 1, "Deberia haber solo un proyecto");
					assert.equal(puntaje, objComentario.tarea, "Deberia quedar el mismo puntaje de tarea");
					assert.equal(creadorComentario, objComentario.creador, "Deberia escoger el mismo creador");


				});


			})
		}
		
	})
