# Reference: https://razinj.dev/how-to-run-strapi-4-in-a-docker-container-using-docker-compose/
# FROM node:lts as strapi-app
# FROM node:14

# # RUN mkdir -p /app && chown 1000:1000 -R /app

# # Let WatchTower know to ignore this container for checking
# LABEL com.centurylinklabs.watchtower.enable="false"

# COPY ./package*.json ./

# RUN npm install -g strapi

# RUN npm install

# RUN npm ci

# COPY . .

# ENV NODE_ENV production

# RUN npm run build

# EXPOSE 1337

# CMD ["npm", "run", "develop"]

# # RUN npm run build
# ENTRYPOINT ["npm", "run", "build"]

# docker build -t strapi-app .
# docker run -it --rm -p 1337:80 strapi-app

# FROM node:14 # FROM node:16-alpine
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /strapi-project
# COPY ./package.json ./
# RUN npm install -g strapi
# RUN npm install
# RUN npm ci
# COPY ./ .
# RUN npm run build
# EXPOSE 1337
# CMD ["npm", "run", "develop"]
####

FROM node:14
# Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# ARG NODE_ENV=development

# RUN mkdir /app
# WORKDIR /app

# COPY ./package.json .
# COPY ./package-lock.json .

# ENV NODE_ENV=${NODE_ENV}

# COPY . /app
COPY . .

# ENV PATH /node_modules/.bin:$PATH

# RUN npm i
RUN npm ci

RUN npm run build

# EXPOSE 8080

# EXPOSE 80

EXPOSE 1337

CMD ["npm", "run", "start"]

# docker ps -a (return)
# 3364ebca0cab   c3c9589d4554   "/bin/sh -c 'npm i'"   5 minutes ago   Exited (1) 4 minutes ago             laughing_tu