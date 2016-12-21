:: We always use two command windows to do development
:: One is for "start-app" and one is for "build". MongoDB should be running automatically.
:: We don't automatically run the commands so we can stop and restart each tool as needed.
start docker exec -i -t storyboard /bin/bash
start docker exec -i -t storyboard /bin/bash
