FROM ubuntu:latest
FROM node:7
RUN mkdir /api
ADD . /api
WORKDIR /api/src
RUN chmod 755 bin/www
RUN npm i
RUN npm install -g nodemon
EXPOSE 3000
