
# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:16.15-alpine

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /react-ui/
 
# Copies package.json and package-lock.json to Docker environment
COPY package*.json /react-ui/

# Installs all node packages
RUN npm install
 
# Copies everything over to Docker environment
COPY . /react-ui/

RUN apk update && apk add curl

# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD [ "npm", "start" ]
