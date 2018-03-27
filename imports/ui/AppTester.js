
import React, { Component } from 'react';
import ProyectoTester from "./ProyectoTester.js";
import {mount} from "react-mounter";
import historialTester from "./historialTester"

export default class AppTester extends Component {
    
    irHistorial(){
        mount(historialTester)
    }


    render() {
        return (
        <div>

            <div className="container">
            <div className="jumbotron">
             <h1 className="display-4" >¡Ah calificar proyectos!</h1>
             <p class="lead">En esta sección puedes encontrar los proyectos existentes en la plataforma para calificar y ganar puntos.</p>
             <hr class="my-4"/>
             <p>
              Si deseas calificar algún proyecto, solo debes presionar el boton Test y completar el formulario que te aparecerá allí.
              Los puntos dependeran del autor del proyecto, debes esperar a que él apruebe tu contibución.
             </p>
            <p class="lead"> Aquí puedes ver el acumulado de tus puntos. 
                <span> </span>
                <button id="historial" class="btn btn-info" onClick={this.irHistorial} >Historial</button>
            </p>
            </div>
            </div>

            <div className="container">
            {this.props.proyectos.map((proyecto)=>{
                return <ProyectoTester 
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
