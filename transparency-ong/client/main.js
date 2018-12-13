import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout/MainLayout.js';
import Login from '../imports/ui/Login/Login.js';
import EventManager from '../imports/ui/Login/EventManager.js';
import VentaTokens from '../imports/ui/Tokens/VentaTokens.js';
import VerEvento from '../imports/ui/Login/VerEvento.js';
import Home from '../imports/ui/Home/Home.js';

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
adminRoutes.route('/editeventos', {
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

adminRoutes.route('/verevento/:eventoId', {
	action() {
		mount(MainLayout, {
			content: (<VerEvento/>)
		})
  }
});
adminRoutes.route('/home', {
	action(){
		mount(MainLayout, {
			content: (<Home/>)
    })
	}
});