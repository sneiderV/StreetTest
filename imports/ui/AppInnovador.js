import React, { Component } from 'react';
import ProyectoInnovador from "./ProyectoInnovador.js";

/**
 * Componente que representa la pantalla "AppInnovador"
 * props: proyectos
 **/
export default class AppInnovador extends Component {



	render() {
		return (
			<div> 
				ERES UN INNOVADOR 
					<h3>Proyectos (de prueba)</h3>
				<div>
					{this.props.proyectos.map((proyecto)=>{
					 	return <ProyectoInnovador 
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
