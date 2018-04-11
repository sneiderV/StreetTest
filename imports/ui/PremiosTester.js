import React, { Component } from 'react';
import swal from 'sweetalert';
//-----------Actualización de Meteor ----------------
import { withTracker } from "meteor/react-meteor-data";

export class PremiosTester extends Component {

    ingreseCuentaAlert(){
    	swal("Ingresa ya!", "Debes ingresar a tu cuenta para realizar esta acción", "error");
    	FlowRouter.go("/");
  	}

  	noHayPuntos(){
    swal("Puntos insuficientes!", "Realiza más test, te esperamos pronto.", "error");
  }
    
    render(){
		if(!Meteor.user()) this.ingreseCuentaAlert();
		return(
			<div className="container">
				<div className="jumbotron">
  					<h1 className="display-4">Premios!</h1>
  					<center>
  					<p className="lead">Estos son los fabulosos premios por los que podras redimir tus puntos.</p>
  					<hr className="my-4"/>
  					<p>Estos son tus puntos disponibles:</p>
  					</center>
				</div>

				<div className="row container">
<div className="col-1"></div>
<div className="col-10">
				<div className="card-deck">	   
				   
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">150 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_amazon.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">Amazon</h5>
					    <p className="card-text">Una tarjeta de regalo por 25 USD en Amazon o AWS.</p>
					    <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">100 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_googleplay.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">Ggoogle play</h5>
					    <p className="card-text">Una tarjeta de regalo por 20 USD en Google.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">300 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_steam.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">Steam</h5>
					    <p className="card-text">Una tarjeta de regalo por 50 USD en Steam.</p>
					    <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>

				</div>

				<div className="card-deck">
				   
				   
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">90 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_netflix.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">Netflix</h5>
					    <p className="card-text">Una tarjeta de regalo por 15 USD en Netflix</p>
					    <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">300 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_playstation.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">PlayStation</h5>
					    <p className="card-text">Una tarjeta de regalo por 50 USD en PlayStation.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">350 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_xbox.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">XboxLive</h5>
					    <p className="card-text">Una tarjeta de regalo por 50 USD en XboxLive.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>

				</div>

				<div className="card-deck">
				   
				   
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">400 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_appstore.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">App Store</h5>
					    <p className="card-text">Una tarjeta de regalo por 50 USD en App Store.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">40 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_bbc.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">BBC</h5>
					    <p className="card-text">Una tarjeta de regalo por 30.000 COP en BBC.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>
					<div className="card text-center border-primary mb-3" style={{width: 18+"rem"}}>
					  <h5 class="card-header">80 pts.</h5>
					  <img className="card-img-top" src="https://raw.githubusercontent.com/sneiderV/StreetTest/master/docs/Images/logo_corral.jpg" alt="Card image cap"/>
					  <div className="card-body">
					    <h5 className="card-title">El Corral</h5>
					    <p className="card-text">Una tarjeta de regalo por 80.000 COP en El Corral.</p>
					     <button type="button" className="btn btn-primary" onClick={this.noHayPuntos.bind(this)}>Adquirir</button>
					  </div>
					</div>

				</div>

</div>
<div className="col-1"></div>

				</div>
			</div> 
			);
	}
}

export default withTracker(()=>{
  return {
    currentUser: Meteor.user()
  };
})(PremiosTester);