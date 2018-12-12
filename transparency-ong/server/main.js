import { Meteor } from 'meteor/meteor';
//import '../imports/api/Events.js';

Meteor.startup(() => {
  // code to run on server at startup
});

export const Images = new FS.Collection("Images", {
	stores: [new FS.Store.GridFS("Images")]
});

Images.allow({
	insert: function(userId, doc){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	},
	download: function(){
		return true;
	}
});

export const EventsImages = new Mongo.Collection("EventsImages");

EventsImages.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});

export const Events = new Mongo.Collection("Events");

Events.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});

export const Factura = new Mongo.Collection("Factura");

Factura.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});