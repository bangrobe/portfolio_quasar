FROM node:16.15-alpine as build-stage

#Set the working directory for container
WORKDIR /app

COPY package.json ./
COPY quasar.config.js ./

RUN npm -g install @quasar/cli
# Install dependancies

RUN npm install

# Copy other project profile

COPY ./ .
RUN quasar build
# # Build stage

# FROM develop-stage as build-stage
# RUN quasar dev

FROM nginx:latest
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

CMD ["nginx", "-g", "daemon off;"]