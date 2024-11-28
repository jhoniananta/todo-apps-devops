# Start your image with a node base image
FROM node:18

# The /app directory should act as the main application
WORKDIR /app

# Copy package.json that save dependencies
COPY package*.json ./

# Install dependencies
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-dev build-essential && \
    npm install -g node-gyp

# Install Nodemon 
RUN npm install -g nodemon

# Install dependencies
RUN npm install

# Copy the project without node_modules
COPY . .

# Expose the port 5000
ENV port=5000

EXPOSE 5000

# Run the application
CMD ["nodemon", "server.js"]