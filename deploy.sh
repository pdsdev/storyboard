cd app
meteor build ../build
cd ../build
tar -zxf app.tar.gz
cd bundle/programs/server
npm install