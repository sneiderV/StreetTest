import {mount} from 'react-mounter';
import App from '../../imports/ui/App.js';
import AppInnovador from "../../imports/ui/AppInnovador.js"
import DetalleProyecto from "../../imports/ui/DetalleProyecto.js"

import AppTester from "../../imports/ui/AppTester.js"
import HistorialTester from "../../imports/ui/historialTester.js"

FlowRouter.route("/",{
	action: function(params, queryParams) {
		mount(App)
	}
})

FlowRouter.route("/AppInnovador",{
	action: function(params, queryParams) {
		mount(AppInnovador)
	}
})
FlowRouter.route("/DetalleProyecto", {
	action: function(params, queryParams) {
		mount(DetalleProyecto)
	}
});
FlowRouter.route("/AppTester", {
	action: function(params, queryParams) {
		mount(AppTester)
	}
});

FlowRouter.route("/HistorialTester", {
	action: function(params, queryParams) {
		mount(HistorialTester) 
	}
});

FlowRouter.route("/PremiosTester", {
	action: function(params, queryParams) {
		mount(PremiosTester) 
	}
});