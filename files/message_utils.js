// Message handling utilities

this.errorAction = function(msg) {
		msg = msg || "";
		var message = msg.message || msg || "Error.";
		bootbox.dialog({
			message: message,
			title: "Error",
			animate: false,
			buttons: {
				success: {
					label: "OK",
					className: "btn-success",
				}
			}
		});
	}
