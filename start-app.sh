#!/bin/bash
# Starts the app
# Sets the Mongo database URL (Mongo must be started seperately)
# Defines the root URL for the application and the port number it is served on.

# Defines configurable attribubes
source app.config


export MONGO_URL=mongodb://localhost:27017/$APP_ROOT
export ROOT_URL=http://localhost:$APP_PORT/$APP_ROOT

echo "APP_PORT: $APP_PORT"
echo "APP_ROOT: $APP_ROOT"
echo "MONGO_URL: $MONGO_URL"
echo "ROOT_URL: $ROOT_URL"

cd app
meteor --port $APP_PORT


