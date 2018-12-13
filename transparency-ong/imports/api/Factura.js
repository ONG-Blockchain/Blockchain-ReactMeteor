export const Factura = new Mongo.Collection("Factura");

export const FacturaImg = new FS.Collection("FacturaImg", {
	stores: [new FS.Store.GridFS("FacturaImg")]
});

FacturaImg.allow({
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

export const FacturaImages = new Mongo.Collection("FacturaImages");

FacturaImages.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc, fields, modifier){
		return true;
	}
});