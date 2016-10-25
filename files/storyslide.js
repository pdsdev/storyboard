var pageSession = new ReactiveDict();

pageSession.set("currentCard", -1);
pageSession.set("cards", []);

Template.TEMPLATE_NAME.created = function() {
}

Template.TEMPLATE_NAME.rendered = function() {
}

Template.TEMPLATE_NAME.events({
	'click #line': function() {
		Router.go("story.line", {boardId : this.params.boardId} );
	},
	'click #slide': function() {
		var cards = pageSession.get("cards");
		var n = pageSession.get("currentCard");
		if(n < cards.length-1)	{ pageSession.set("currentCard", n+1); }
	},
	'click #prev': function() {
		var n = pageSession.get("currentCard");
		if(n > -1)	{ pageSession.set("currentCard", n-1); }
	},
	'click #next': function() {
		var cards = pageSession.get("cards");
		var n = pageSession.get("currentCard");
		if(n < cards.length-1)	{ pageSession.set("currentCard", n+1); }
	}
});

Template.TEMPLATE_NAME.helpers({
	"getItems": function() {
		var cards = TEMPLATE_NAMEItems(this.QUERY_NAME);
		pageSession.set("cards", cards);
		console.log("Card count: " + cards.length);
		if( cards.length > 0) {
			pageSession.set("currentCard", -1);
		}
		return cards;	// Match query name
	},
	"getItem": function () {
		var cards = pageSession.get("cards");
		var n = pageSession.get("currentCard");
		console.log("Card number: " + n);
		console.log(JSON.stringify(cards[n], null, 3));
		return cards[n];
	},
	"currentCard": function() {
		var n = pageSession.get("currentCard");
		if(n < 0) return "T";	// Title
		return (n + 1);
	},
	"isTitleCard": function() {
		if(pageSession.get("currentCard") == -1) return true;
		return false;
	},
	"boardInfo": function(boardId) {
		return this.board_details_open;
	}
});

var TEMPLATE_NAMEItems = function(cursor) {
	if(!cursor) {
		return [];
	}
	
	var raw = cursor.fetch();
	
	return raw;
}
