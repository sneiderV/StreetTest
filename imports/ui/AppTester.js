
import React, { Component } from 'react';
import ProyectoTester from "./ProyectoTester.js";

export default class AppTester extends Component {
    render() {
        return (
        <div> ERES UN TESTER 
            <button id="historial" >Historial</button>
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
