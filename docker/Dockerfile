# Build an environment to develop Meteor apps using Meteor Kitchen
FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y curl
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-get update
RUN apt-get install -y mongodb-org
RUN curl http://www.meteorkitchen.com/install | /bin/sh
RUN curl https://install.meteor.com/ | sh
RUN echo "Finalizing...."
EXPOSE 3000
RUN mkdir /home/project
VOLUME /home/project
