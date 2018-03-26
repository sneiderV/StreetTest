
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
        <div> ERES UN TESTER 
            <button id="historial" onClick={this.irHistorial} >Historial</button>
            <div>
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
