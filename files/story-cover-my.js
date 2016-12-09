Template.TEMPLATE_NAME.events({
	"click #new": function(e, t) {
		e.preventDefault();
		Boards.insert( { "title" : "Set the Title", "description" : "", "private" : true, "blocked" : false, "shared" : "none" }, function(err, id) {
			if(err) {
				pageSession.set("errorMessage", err.message);
			} else {	// Jump to edit
				Router.go("edit", { boardId : id} );
			}
		} );
		// Router.go("story.line", { boardId : p} );
		// alert("Create new");
		return false;
	},
	"click .storycard-heading": function(e, t) {
		e.preventDefault();
		Router.go("mystory.line", {boardId: this._id});	// Jump to
		return false;
	},
	"click .storycard-body": function(e, t) {
		e.preventDefault();
		Router.go("mystory.line", {boardId: this._id});	// Jump to
		return false;
	},
	"click .storycard-footing": function(e, t) {
		e.preventDefault();
		Router.go("mystory.line", {boardId: this._id});	// Jump to
		return false;
	},
	"click #explore-button": function(e, t) {
		e.preventDefault();
		Router.go("mystory.line", {boardId: this._id});	// Jump to
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
