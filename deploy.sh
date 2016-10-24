cd app
meteor build ../deploy
cd ../deploy
tar -zxf app.tar.gz
cd bundle/programs/server
npm install