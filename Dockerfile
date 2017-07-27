FROM node
MAINTAINER matz <matz@west.sd.keio.ac.jp>
EXPOSE 3333
RUN git clone https://github.com/matzTada/WestlabGCTCGUI
WORKDIR /WestlabGCTCGUI/GCTC_GUI


