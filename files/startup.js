// Create Admin account if one does not exist
// Typically only done when first installed, but will be done if account
// is missing making the server "self-healing"
var adminEmail = "admin@localhost.my";
if ( ! Accounts.findUserByUsername(adminEmail)) {
	try {
		var newUserId = Accounts.createUser(
			{
				username: adminEmail,
				email: adminEmail,
				password: 'admin',
				profile: { name: 'Admin', email: adminEmail }
			}
		);
		// Now promote account to "admin" role
		Meteor.users.update( { _id: newUserId }, { $set: { "roles" : ["admin"] , "emails.0.verified" : true } } );
	} catch(e) {
		console.log("Error creating admin account: " + e.message);
	}
}
