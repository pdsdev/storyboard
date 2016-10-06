Template.TEMPLATE_NAME.events({

});

Template.TEMPLATE_NAME.helpers({
	"getItems": function() {
		return TEMPLATE_NAMEItems(this.boards);
	}

});

var TEMPLATE_NAMEItems = function(cursor) {
	if(!cursor) {
		return [];
	}
	var raw = cursor.fetch();
	
	return raw;
}
