:: Starts the app
:: Sets the Mongo database URL (Mongo must be started seperately)
:: Defines the root URL for the application and the port number it is served on.

set MONGO_URL=mongodb://localhost:27017/storyboard
set ROOT_URL=http://localhost:3000/storyboard
cd app
meteor --port=3000