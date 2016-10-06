:: Build the application using Meteor Kitchen
\tools\meteor-kitchen\bin\meteor-kitchen.exe  app-recipe.json app
if errorlevel 1 goto End

:: Fix up some files
:: This makes public lists searchable with a user ID
sed -i '/Meteor.publish("boards_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/boards.js
sed -i '/Meteor.publish("board_details_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/boards.js
sed -i '/Meteor.publish("board_items_open"/,/ownerId:this.userId/{s/,ownerId:this.userId//}' app/server/publish/board_items.js

:: Fix up some files
:: This makes the Brand link something real
sed -i 's;a class="navbar-brand" href="#";a class="navbar-brand" href="http://www.benefitsaba.com/";' app/client/views/layout/layout.html

:: Fix-up routes
:: Make home path start with '/storyboard'
sed -i 's;{path: "/;{path: "/storyboard/;g' app/client/views/router.js
sed -i 's;routePath === "/";routePath === "/storyboard/";' app/client/client.js

:: nemo64:bootstrap is not compatible with meteor 1.2+
:: Remove nemo64:bootstrap and replace with twbs:bootstrap
cd app
echo "Removing  nemo64:bootstrap"
call meteor remove nemo64:bootstrap
echo "Adding  twbs:bootstrap"
call meteor add twbs:bootstrap
cd ..

:End