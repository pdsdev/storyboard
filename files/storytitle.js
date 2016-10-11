Template.TEMPLATE_NAME.events({
	"click #edit": function(e, t) {
		e.preventDefault();
		var p = $(e.target).attr('data');
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
