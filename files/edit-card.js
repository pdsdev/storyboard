removeList = [];

Template.TEMPLATE_NAME.rendered = function() {
	removeList = [];
};

Template.TEMPLATE_NAME.events({
	'click .storyline-item': function(e, t) {
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
			var data = Blaze.getData($(item)[0]);
			data.title = value;
			$(item).find('h4').text(value);
		}
	},
	'keyup input[name="image-url"]': function (e, t) {
		if (e.which === 13) {
			var value = e.target.value;
			var item = $(e.target).closest('li');
			setImageURL(item, value);
		}
	},
	'blur input[name="image-url"]': function (e, t) {
		var value = e.target.value;
		var item = $(e.target).closest('li');
		setImageURL(item, value);
	},
	'dragover input[name="image-url"]' : function(e, t) {
		e.preventDefault(); 
		$(e.currentTarget).addClass('dragover');
	},
	'dragleave input[name="image-url"]' : function(e, t) {
		$(e.currentTarget).removeClass('dragover');
	},
	'drop input[name="image-url"]': function (e, t) {
		e.preventDefault();
		$(e.target).removeClass('dragover');
		var value = e.originalEvent.dataTransfer.getData("text");
		$(e.target).val(value);
		// Change image in card
		var item = $(e.target).closest('li');
		setImageURL(item, value);
	}, 
	'keyup input[name="caption"]': function (e, t) {
		// if (e.which === 13) {
		  var value = e.target.value;
		  var item = $(e.target).closest('li');
		  if(item) {
			var data = Blaze.getData($(item)[0]);
			data.caption = value;
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
			var data = Blaze.getData($(item)[0]);
			data.description = value;
			$(item).find('div.storyline-text').html(Markdown(value));
		  }
		// }
	},
	'keyup input[name="delve-url"]': function (e, t) {
		if (e.which === 13) {
			var value = e.target.value;
			var item = $(e.target).closest('li');
			setDelveURL(item, value);
		}
	},
	'blur input[name="delve-url"]': function (e, t) {
		var value = e.target.value;
		var item = $(e.target).closest('li');
		setDelveURL(item, value);
	},
	'dragover input[name="delve-url"]' : function(e, t) {
		e.preventDefault(); 
		$(e.currentTarget).addClass('dragover');
	},
	'dragleave input[name="delve-url"]' : function(e, t) {
		$(e.currentTarget).removeClass('dragover');
	},
	'drop input[name="delve-url"]': function (e, t) {
		e.preventDefault();
		$(e.target).removeClass('dragover');
		var value = e.originalEvent.dataTransfer.getData("text");
		$(e.target).val(value);
		// Set value in card
		var item = $(e.target).closest('li');
		setDelveURL(item, value);
	}

});

Template.TEMPLATE_NAME.helpers({
	"hide": function(url) {
		if(url) return "";
		
		return "hidden";
	}	
});


// Re-usable functions
// Set imageURL
var setImageURL = function(item, value) {
	if(item) {
		var current = $(item).find('img').attr("src");
		if(current != value) {	// Change value
			var data = Blaze.getData($(item)[0]);
			data.imageURL = value;
			$(item).find('img').attr("src", value);
			if(value) { $(item).find('figure').removeClass('hidden'); }
			else  { $(item).find('figure').addClass('hidden'); }
		}
	}	
}

// Set devleURL
var setDelveURL = function(item, value) {
	if(item) {
		var current = $(item).find('.delve').find('span').attr("data");
		// console.log('current: ' + current);
		if(current != value) {	// Change value
			var data = Blaze.getData($(item)[0]);
			data.delveURL = value;
			$(item).find('p[name="delve"]').find('span').attr("data", value);
			if(value) { $(item).find('p[name="delve"]').removeClass('hidden'); }
			else  { $(item).find('p[name="delve"]').addClass('hidden'); }
		}
	}
}
