import React from 'react';
//import React library

import { Meteor } from 'meteor/meteor';
//import Meteor library

import { render } from 'react-dom';
//import the render function from react-dom

import HelloMeteor from '../imports/HelloMeteor.jsx';
//import the React component 

import {todoContainer} from '../imports/api/todos'
//import the mongo collection

Meteor.startup(() => {
  render(<HelloMeteor />, document.getElementById("app"));
});
