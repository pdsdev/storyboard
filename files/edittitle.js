
Template.TEMPLATE_NAME.rendered = function() {
}

Template.TEMPLATE_NAME.events({
	'keyup input[name="story-image-url"]': function (e, t) {
		if (e.which === 13) {
			var value = e.target.value;
			var item = $('#story-img');
			if(item) {
				var current = $(item).attr("src");
				if(current != value) {	// Change value
					$(item).attr("src", value);
				}
			}
		}
	},
	"click #cancel": function(e, t) {
		e.preventDefault();
		var p = $(e.target).attr('data');
		Router.go("storyall.storyline", { boardId : p} );
		return false;
	},
	"click #save": function(e, t) {
		e.preventDefault();
		var p = $(e.target).attr('data');
		var story = { 
			title: $('[name="story-title"]').val(),
			imageURL: $('[name="story-image-url"]').val(),
			description: $('[name="story-description"]').val()
		}
		// alert("Story:" + JSON.stringify(story, null, 3));
		var boardId = $('#save').attr('data');
		// alert("Updating: " + boardId);
		if(boardId) {
			Boards.update({ _id: boardId }, { $set: story }, function(e) { if(e) errorAction(e) });
		} else {
			errorAction(new Meteor.Error("no-document", "No document is associated with the sotryboard."));
		}
		var cards = [];
		$('#storyline li').each(function(i, el){
			var data = Blaze.getData(el);
			var cardId = "";
			if(data) cardId = data._id;
			card = { 
				step: i+1,
				title: $(el).find('h4').text().trim(),
				imageURL: $(el).find('[name="figure-img"]').attr('src'),
				imageCaption: $(el).find('figcaption').text().trim(),
				description: $(el).find('[name="description"]').text().trim(),
				delveURL: $(el).find('[name="delve-button"]').attr('data')
			}
			cards.push({ 
				cardId: cardId,
				card: card
			});

			// console.log("item[" + i + "]: " + $(el).find('h4').text(value)); //  Blaze.getData(el).step + "; " + Blaze.getData(el).title);
		});
		cards.pop();	// Last entry is a placeholder
		// alert("Story Cards:" + JSON.stringify(cards, null, 3));
		$.each(cards, function(i, item){
			if(item.cardId) {	// Update
				// alert("Update Card:" + JSON.stringify(item, null, 3));
				BoardItems.update({ _id: item.cardId }, { $set: item.card }, function(e) { if(e) errorAction(e) });
			} else {	// New
				item.card.boardId = boardId;
				// alert("Insert Card:" + JSON.stringify(item, null, 3));
				BoardItems.insert(item.card, function(e) { if(e) errorAction(e) });
			}
		});
		
		// alert("Remove list: " + JSON.stringify(removeList));
		$.each(removeList, function(i, id) {
			// alert("Removing: " + id);
			BoardItems.remove(id);
		});
		// Post to data

		Router.go("storyall.storyline", { boardId : p} );
		return false;
	}
});

Template.TEMPLATE_NAME.helpers({
});
