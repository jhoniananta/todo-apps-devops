#Start your image with a node base image
FROM node:18-alpine

# The /frontend directory should act as the main application
WORKDIR /frontend

# Copy package.json that save dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the project without node_modules
COPY . .

# Expose the port 5173
ENV port=8080

EXPOSE 8080

# Run the application
CMD ["npm", "run", "dev"]





