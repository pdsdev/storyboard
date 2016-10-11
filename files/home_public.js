Template.TEMPLATE_NAME.rendered = function() {
	// Set background - We need to use location.pathname for things to work properly when rooted at a path
	$('section, .jumbotron').css('background-image', "url('" + window.location.pathname + "/images/jumbotron-bg.jpg')");
	// Fill screen
	$('section, .jumbotron').css('min-height', $(window).height() + 'px');
	window.scrollTo(0, 0);
};

Template.TEMPLATE_NAME.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("story", {});
	}	
});

Template.TEMPLATE_NAME.helpers({
	
});
