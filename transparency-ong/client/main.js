import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout/MainLayout.js';
import Login from '../imports/ui/Login/Login.js';
import EventManager from '../imports/ui/Login/EventManager.js';
import VentaTokens from '../imports/ui/Tokens/VentaTokens.js';

var adminRoutes = FlowRouter.group({
	triggersEnter: [function(context, redirect){
		
	}]
});
adminRoutes.route('/', {
	action() {
		mount(MainLayout, {
			content: (<Login/>)
		})
	}
});
adminRoutes.route('/EventManager', {
	action() {
		mount(MainLayout, {
			content: (<EventManager/>)
		})
	}
});
adminRoutes.route('/comprar', {
	action(){
		mount(MainLayout, {
			content: (<VentaTokens/>)
		})
	}
});