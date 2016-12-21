# Build an environment to develop Meteor apps using Meteor Kitchen
FROM ubuntu:14.04
LABEL version="1.0" description="Development environment for Meteor apps using Meteor Kitchen" 
RUN apt-get update
RUN apt-get install -y curl apt-utils sudo

# Create project folder
RUN mkdir -p /var/www/storyboard

# Install Node.js and NPM
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs

# Install mongodb
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
#RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN apt-get update
RUN apt-get install -y mongodb-org

# Install PM2 (popular Node.js process manager)
RUN npm install pm2@latest -g

# Create user "sysop"
RUN adduser --disabled-password --gecos "" sysop && adduser sysop sudo && echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# Create the MongoDB data directory and set ownership to user
RUN mkdir -p /data/db && chown -R sysop.sysop /data/db

# Create project folder
RUN chown -R sysop.sysop /var/www/storyboard

# Run all future commands as user
USER sysop

# Install meteor and meteor-kitchen under user
# Install core Meteor
RUN curl https://install.meteor.com/ | sh

# Install meteor kitchen
RUN curl https://www.meteorkitchen.com/install | sh

# Configure access
EXPOSE 3000
VOLUME /var/www/storyboard

# Set /usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
