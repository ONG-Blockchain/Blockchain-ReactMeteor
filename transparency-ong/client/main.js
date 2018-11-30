import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/ui/MainLayout/MainLayout.js';
import Login from '../imports/ui/Login/Login.js';
import HomeUser from '../imports/ui/HomeUser/HomeUser.js';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<HomeUser/>)
		})
	}
});