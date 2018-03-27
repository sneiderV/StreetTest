import React, { Component } from 'react';

export default class historialTester extends Component {


    render() {
        return (
           <div className="container"> 
           		<div className="jumbotron">
                    <h1 className="display-4">Nombre: usuario</h1>
                    <hr className="my-4"/>
                   <center>
                    <p  className="lead">Los puntos que ha acumulado hasta el momento en StreetTest</p>
                    <h1 className="display-4">50 puntos.</h1>
                    <button type="button" class="btn btn-outline-danger">Redimir</button>
                   </center>
                </div>
            </div>
            );
    }
}