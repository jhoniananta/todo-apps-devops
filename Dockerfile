#Start your image with a node base image
FROM node:18-alpine

# The /frontend directory should act as the main application
WORKDIR /app

# Copy package.json that save dependencies
COPY package*.json ./

# Set the environment variable
ARG VITE_BASE_URL
RUN echo "VITE_BASE_URL=$VITE_BASE_URL" > .env

# Install dependencies
RUN npm install
RUN npm i -g serve

# Copy the project without node_modules
COPY . .

# Build the project
RUN npm run build

# Expose the port 3000
EXPOSE 3000

# Run the application
CMD ["serve", "-s", "dist"]