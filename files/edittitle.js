Template.TEMPLATE_NAME.rendered = function() {
}

Template.TEMPLATE_NAME.events({
	"click #cancel": function(e, t) {
		e.preventDefault();
		var p = $(e.target).attr('data');
		Router.go("storyall.storyline", { boardId : p} );
		return false;
	},
	"click #save": function(e, t) {
		e.preventDefault();
		var p = $(e.target).attr('data');
		alert("Save");
		Router.go("storyall.storyline", { boardId : p} );
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({
});
