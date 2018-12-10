import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout/MainLayout.js';
import Login from '../imports/ui/Login/Login.js';
import Home from '../imports/ui/Home/Home';
import EventManager from '../imports/ui/Login/EventManager.js';

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
adminRoutes.route('/home', {
	action(){
		mount(MainLayout, {
			content: (<Home/>)
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