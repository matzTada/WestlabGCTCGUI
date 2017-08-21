#normal
FROM node
#for raspberry pi
#FROM hypriot/rpi-node
MAINTAINER matzTada
RUN ["git", "clone", "https://github.com/matzTada/WestlabGCTCGUI"]
WORKDIR /WestlabGCTCGUI/GCTC_GUI
ENV JSON_FILE_DIR /jsons
ENV PORT 3333
