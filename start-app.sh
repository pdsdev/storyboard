#!/bin/bash
# Starts the app
# Sets the Mongo database URL (Mongo must be started seperately)
# Defines the root URL for the application and the port number it is served on.

# Defines configurable attribubes
source app.config

echo "APP_PORT: $APP_PORT"
echo "APP_ROOT: $APP_ROOT"

export MONGO_URL=mongodb://localhost:27017/$APP_ROOT
export ROOT_URL=http://localhost:$APP_PORT/$APP_ROOT
cd app
meteor --port $APP_PORT


