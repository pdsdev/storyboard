Template.TEMPLATE_NAME.events({
	"click .storycard-heading": function(e, t) {
		e.preventDefault();
		Router.go("story.line", {boardId: this._id});	// Jump to
		return false;
	},
	"click .storycard-body": function(e, t) {
		e.preventDefault();
		Router.go("story.line", {boardId: this._id});	// Jump to
		return false;
	},
	"click .storycard-footing": function(e, t) {
		e.preventDefault();
		Router.go("story.line", {boardId: this._id});	// Jump to
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
