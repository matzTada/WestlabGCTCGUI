GUI_PORT=5000
JSON_DIR="../GCTC_GUI/public/jsons" #relative path allowed
JSON_DIR=$(cd $(dirname $0) && cd $JSON_DIR && pwd) #convert to absolute path
sudo docker build -t gctcgui `pwd`
#sudo docker run -it -v $JSON_DIR:/jsons -p $GUI_PORT:3333 --rm gctcgui /bin/bash 
sudo docker run -it -v $JSON_DIR:/jsons -p $GUI_PORT:3333 --rm gctcgui /bin/bash ./start.sh

