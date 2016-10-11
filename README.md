# Storyboard

Storyboard is a web application for telling stories using a sequential set of panels that contain pictures and text. This is known as a storyboard.
 
Every discovery has a story. Tell it with Storyboard.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

- [Meteor Kitchen](http://www.meteorkitchen.com "Meteor Kitchen")
- [Meteor](https://www.meteor.com/ "Meteor")
- [MongoDB](https://www.mongodb.com/ "MongDB") (Click download and choose Community Server)

### Project Contents

- **app-recipe.json**: The specification of the app in Meteor Kitchen API.
- **files**: Folder containing templates, helper code, and other resources. 
- **docker**: Contains files to create a Docker container.
- **sample**: A MongoDB containing sample storyboards.  
 
### Installing

The project source and tools used to build the app are very portable. However, a Linux or OSX platform is the preferred platform. 

1. Run MongoDB (it should start automatically, but doesn't always)
   ````
   service mongodb restart
   ````

2. Load some sample storyboard data
   ````
   cd /home/project/sample
   ./restore.sh
  ````

3. Build the app
   ````
   cd /home/project
   ./build.sh
   ````

4. Run the app
   ````
   ./start-app.sh
   ````

5. Direct your browser to 
   ````
   http://localhost:3000/storyboard
   ````

While the app is running, each time you do a build the  app will automatically update. Part of the Meteor magic.

To do development on a Windows platform or on virtual machines you can create a Docker container. A Dockerfile to to do Meteor Kitchen based developed is included with this project in the "docker" folder. 

**Docker Installation**

1. Use the Dockerfile in the "docker" folder to create an image with the prerequisites installed. Let's call this image "kitchen".

   ```
   cd docker
   docker build -t kitchen .
   ```
   In the Docker image, the default port for Meteor applications, port 3000, is exposed and the mount point for the Storyboard source is "/home/project"

2. Create a container (running instance) of the image. 

   ````
   docker run -d -p 3000:3000 -v /local/project:/home/project -t storyboard storyboard
   ````

   Note: "/local/project" is the path to Storyboard project files (where you cloned this Git repository).

3. Connect the storyboard container
   ````
   docker exec -i -t storyboard /bin/bash
   ````

Then do the project installation above.

### Administration
A default administration account is created when the storyboard is first run. The log in information is:

e-mail: admin@locahost.my
password: admin

You should change the admin password.

## Deployment

To deploy a Meteor app you need to package the entire app with the ```meteor build```. A script is available to make this easier. Run
````
./deploy.sh
````
This will create a production version of the app in the bundle/programs/server and can be run with node.js.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/pdsdev/storyboard/tags). 

## Authors

- **Todd King** - *Initial work* - [UCLA](https://github.com/toddking)

See also the list of [contributors](https://github.com/pdsdev/storyboard/contributors) who participated in this project.

## History
- The Storyboard concept was first described by Todd King in the late summer of 2015.
- The idea was presented to NASA's tournament lab by Ed Grayzeck in the late summer of 2015.
- NASA's Tournament lab accepted it as a challenge.
- Topcoder (now part of Aspirio) coordinated the challenge and by late fall 2015 a working prototype was delivered. The challenge was lead by Ambi Del Villar.
- The prototype was re-engineered and revised in early 2016 by Todd King.
- The project became on open source project early fall of 2016.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- The development of Storyboard was sponsored by [NASA](http://nasa.gov "NASA").
- Hat tip to [Petar Korponaić](https://github.com/perak) for [Meteor Kitchen](http://www.meteorkitchen.com "Meteor Kitchen") and the great examples.
