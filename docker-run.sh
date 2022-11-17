#!/bin/sh

# resource 
# https://github.com/strapi/strapi-docker
# docker run -it -p 1337:1337 -v `pwd`:/srv/app strapi/strapi

# self-made

# docker run -d -it -p 80:1337 --name=sa strapi-app
# docker run -d -it --rm -p 1337:1337 --name=strapi-app-container strapi-app

docker build -t strapi-app .
docker run --rm -p 1337:1337 -d strapi-app
