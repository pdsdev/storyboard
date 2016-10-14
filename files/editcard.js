removeList = [];

Template.TEMPLATE_NAME.rendered = function() {
	removeList = [];
};

Template.TEMPLATE_NAME.events({
	"click .storyline-item": function(e, t) {
		e.preventDefault();
		Blaze.getData(e.target)
		// alert('Click item');
		// console.dir(Blaze.getData(e.target));
		return false;
	},

	'click [name="remove"]': function(e, t) {
		e.preventDefault();
		var target = e.target;
		bootbox.dialog({
			message: "Once an item is removed and the storyboard is saved the item will be permanently removed.",
			title: "Remove item?",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						var data = Blaze.getData(target.closest('li'));
						if(data) removeList.push(data._id);	// Add to list of items to remove on save
						target.closest('li').remove();	// Remove the card <li> item
					}
				},
				danger: {
					label: "No",
					className: "btn-default"
				}
			}
		});
		return false;
	},
	
	// Process the form associated with a storyline card.
	'keyup input[name="title"]': function (e, t) {
		var value = e.target.value;
		var item = $(e.target).closest('li');
		if(item) {
			$(item).find('h4').text(value);
		}
	},
	'keyup input[name="image-url"]': function (e, t) {
		if (e.which === 13) {
			var value = e.target.value;
			var item = $(e.target).closest('li');
			if(item) {
				var current = $(item).find('img').attr("src");
				if(current != value) {	// Change value
					$(item).find('img').attr("src", value);
					if(value) { $(item).find('figure').removeClass('hidden'); }
					else  { $(item).find('figure').addClass('hidden'); }
				}
			}
		}
	},
	'keyup input[name="caption"]': function (e, t) {
		// if (e.which === 13) {
		  var value = e.target.value;
		  var item = $(e.target).closest('li');
		  if(item) {
			$(item).find('figcaption').text(value);
		  }
		// }
	},
	'keyup textarea[name="description"]': function (e, t) {
		// if (e.which === 13) {
		  var value = e.target.value;
		  // console.log('value: ' + value);
		  var item = $(e.target).closest('li');
		  if(item) {
			$(item).find('div.storyline-text').text(value);
		  }
		// }
	},
	'keyup input[name="delve-url"]': function (e, t) {
		if (e.which === 13) {
			var value = e.target.value;
			var item = $(e.target).closest('li');
			if(item) {
				var current = $(item).find('.delve').find('span').attr("data");
				// console.log('current: ' + current);
				if(current != value) {	// Change value
					$(item).find('p[name="delve"]').find('span').attr("data", value);
					if(value) { $(item).find('p[name="delve"]').removeClass('hidden'); }
					else  { $(item).find('p[name="delve"]').addClass('hidden'); }
				}
			}
		}
	}	

});

Template.TEMPLATE_NAME.helpers({
	"hide": function(url) {
		if(url) return "";
		
		return "hidden";
	}	
});
