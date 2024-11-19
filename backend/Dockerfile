#Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application
WORKDIR /app

# Copy package.json that save dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Nodemon
RUN npm install -g nodemon

# Copy the project without node_modules
COPY . .

# Expose the port 500
ENV port=5000

EXPOSE 5000

# Run the application
CMD ["nodemon", "server.js"]





