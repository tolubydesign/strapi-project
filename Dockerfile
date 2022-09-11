# resource
# https://github.com/strapi/strapi-docker

# FROM node:14
      
# LABEL org.label-schema.vendor="Strapi" \
#       org.label-schema.name="Strapi Docker image" \
#       org.label-schema.description="Strapi containerized" \
#       org.label-schema.url="https://strapi.io" \
#       org.label-schema.vcs-url="https://github.com/strapi/strapi-docker" \
#       org.label-schema.version=latest \
#       org.label-schema.schema-version="1.0" \
#       multi.label1="value1" \
#       multi.label2="value2" \
#       other="value3"

# WORKDIR /usr/src/api

# RUN npm install -g strapi

# Stage 1
FROM node:14

RUN mkdir -p /app && chown 1000:1000 -R /app

WORKDIR /app

COPY package.json /app

RUN npm install -g strapi

RUN npm install

COPY . /app

# RUN npm run develop
RUN npm run build

# stage 2



RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

VOLUME /srv/app

COPY . .
COPY docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["strapi", "develop"]

EXPOSE 1337


# Build the app’s container image: docker build -t strapi .
# Start an app container: docker run -dp 3000:3000 strapi