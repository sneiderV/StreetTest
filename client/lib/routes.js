import {mount, withOptions} from 'react-mounter';
import App from '../../imports/ui/App.js';
import AppInnovador from '../../imports/ui/AppInnovador.js';

/*const mount2 = withOptions({
	rootId: 'renderPage-target',
}, mount);*/

FlowRouter.route("/",{
	action: function(params, queryParams) {
		mount(App)
	}
})

FlowRouter.route("/appinnovador",{
	action: function(params, queryParams) {
		mount(AppInnovador)
	}
})