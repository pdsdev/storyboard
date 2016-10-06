# Storyboard
Every discovery has a story. Tell it with Storyboard.

#Prerequisites
[Meteor Kitchen](http://www.meteorkitchen.com/) 
[Meteor](https://www.meteor.com/)
[MongoDB](https://www.mongodb.com/) (Click download and choose Community Server)

# Development Environments
Windows, Linux, OSX, Docker

# Building the App
use the script "build"

# Running 
use the script "start-app"

# Loading Sample database
````
cd sample-md
mongorestore --db storyboard storyboard
````

# Docker installation
Crete an image with 
````
cd docker
docker build -t storyboard . 
````
The mount point for the project is /home/project

Run a container with
````
docker run -d -p 3000:3000 -v /local/project:/home/project -t storyboard storyboard
````

# Windows Installation Notes

- Script expect Meteor Kitchen to be installed in /tools/meteor-kitchen
- MongoDB needs to be started manually - use the script "start-mongo". Data and logs are stored in "/data/storyboard".