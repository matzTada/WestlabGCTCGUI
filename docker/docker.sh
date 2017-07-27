PORT=3333
sudo docker build -t gctcgui `pwd`
sudo docker run -it -p $PORT:3333 --rm gctcgui /bin/bash ./start.sh

