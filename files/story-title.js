Template.TEMPLATE_NAME.events({
	"click #play": function(e, t) {
		e.preventDefault();
		// var p = $(e.target).attr('data');
		var p = this.params.boardId;
		Router.go('story.slide', {boardId: p});
	},
	"click #edit": function(e, t) {
		e.preventDefault();
		// var p = $(e.target).attr('data');
		var p = this.params.boardId;
		Router.go("edit", { boardId : p} );
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({
	"canEdit": function(ownerId) {
		// If logged in - check if owner of admin
		if( Meteor.userId()) {
			if (Meteor.userId() == ownerId ) return true;
			if (Meteor.user().roles && Meteor.user().roles.indexOf("admin") != -1) return true;
		}
		return false; //editing not allowed
	}
});
