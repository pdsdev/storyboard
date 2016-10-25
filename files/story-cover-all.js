Template.TEMPLATE_NAME.events({
	"click #explore-button": function(e, t) {
		e.preventDefault();
		Router.go("storyall.line", {boardId: this._id});	// Jump to
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({
	"getItems": function() {
		return TEMPLATE_NAMEItems(this.QUERY_NAME);	// Match query name
	}

});

var TEMPLATE_NAMEItems = function(cursor) {
	if(!cursor) {
		return [];
	}
	var raw = cursor.fetch();
	
	return raw;
}
