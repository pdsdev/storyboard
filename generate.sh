#!/bin/bash
/usr/local/bin/meteor-kitchen app-recipe.json app

# After the first time the app is built Meteor Kitchen leaves behind a 
# generic main.* page which needs to be removed.
if [ -f app/client/main.html ]; then
   rm -f app/client/main.*
fi

# Defines configurable attribubes
source app.config

# Fix up some files
# This makes public lists searchable with a user ID
sed -i '/Meteor.publish("boards_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/boards.js
sed -i '/Meteor.publish("board_details_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/boards.js
sed -i '/Meteor.publish("board_items_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/board_items.js

# Fix up some files
# This makes the Brand link something real
sed -i 's;a class="navbar-brand" href="#";a class="navbar-brand" href="'$APP_HOME_URL'";' app/client/views/layout/layout.html

# Fix up routes
sed -i 's;{path: "/;{path: "/'$APP_ROOT'/;g' app/client/views/router.js
sed -i 's;routePath === "/";routePath === "/'$APP_ROOT'/";' app/client/client.js

# Allow both private and public when logged in
sed -i -e 's;Router.ensureNotLogged;Router.ensureGranted;'  app/client/views/router.js

# nemo64:bootstrap is not compatible with meteor 1.2+
# Remove nemo64:bootstrap and replace with twbs:bootstrap
cd app
echo "Removing  nemo64:bootstrap"
meteor remove nemo64:bootstrap
echo "Adding  twbs:bootstrap"
meteor add twbs:bootstrap
cd ..