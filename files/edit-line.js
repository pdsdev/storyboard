Template.TEMPLATE_NAME.rendered = function() {
	// This makes every other item appear on the right side of the line
	$( "#storyline" ).disableSelection();
	
	// Make the list sortable with drap and drop
	this.$('#storyline').sortable({
		// placeholder: "ui-state-highlight",
		tolerance: "pointer",
		revert: true,
		/*
        update: function(e, ui) {
			console.log("Ready to scan");
		},
        stop: function(e, ui) {
			console.log('Stop');

			// get the dragged html element and the one before
			//   and after it
			el = ui.item.get(0);
			before = ui.item.prev().get(0);
			after = ui.item.next().get(0);
			console.log('dragged: ' + Blaze.getData(el).step);
			if(before) {
				console.log('Before: ' + Blaze.getData(before).step);
			}
			if(after) {
				console.log('After: ' + Blaze.getData(after).step);
			}
			$('#storyline li').each(function(i, el){
				console.log("item[" + i + "]: " + Blaze.getData(el).step + "; " + Blaze.getData(el).title);
			});
		}
		*/
	
    } )

};

Template.TEMPLATE_NAME.events({
	"click .storyline-item": function(e, t) {
		e.preventDefault();
		Blaze.getData(e.target)
		// alert('Click item');
		console.dir(Blaze.getData(e.target));
		return false;
	},
	'click [name="new-item"]': function(e, t) {
		Blaze.renderWithData(Template.EditCard, 
			{title: "", imageURL: "#", imageCaption: "", delveURL: "", description: ""},
			$('#storyline')[0], $('#storyline li').last()[0]);	// [0] is the element in the DOM
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
