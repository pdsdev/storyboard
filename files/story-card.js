Template.TEMPLATE_NAME.rendered = function() {
};

Template.TEMPLATE_NAME.events({
	"click .storyline-heading": function(e, t) {
		e.preventDefault();
		p = $(e.target).closest(".storyline-panel");
		if(p) { 
			url = $(p).attr("data");
			if(url) { window.open(url); } // Router.go("boards.edit", {boardId: this._id});
		}
		return false;
	},
	"click .storyline-body": function(e, t) {
		e.preventDefault();
		p = $(e.target).closest(".storyline-panel");
		if(p) { 
			url = $(p).attr("data");
			if(url) { window.open(url); } // Router.go("boards.edit", {boardId: this._id});
		}
		
		return false;
	},
	"click .storyline-footer": function(e, t) {
		e.preventDefault();
		p = $(e.target).closest(".storyline-panel");
		if(p) { 
			url = $(p).attr("data");
			if(url) { window.open(url); } // Router.go("boards.edit", {boardId: this._id});
		}
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
