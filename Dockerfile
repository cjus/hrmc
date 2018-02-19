FROM node:8.9.1-alpine
LABEL maintainer="Carlos Justiniano <cjus34@gmail.com>"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install --production

