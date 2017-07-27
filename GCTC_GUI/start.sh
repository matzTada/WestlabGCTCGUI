if [ -z "${JSON_FILE_DIR+x}" ] ; then #if JSON_FILE_DIR is not defined, define.
  echo "JSON_FILE_DIR was not defined before, define JSON_FILE_DIR"
  export JSON_FILE_DIR="./public/jsons"
fi
echo "JSON_FILE_DIR: $JSON_FILE_DIR"
export PORT=3330
npm start
