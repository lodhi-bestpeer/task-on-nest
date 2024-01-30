# Use the official Node.js image as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /first-project

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your Nest.js application is running on
EXPOSE 3000

# Environment variable for MongoDB connection string
# ENV MONGODB_URI mongodb://mongod:27017/nest
# Command to run your Nest.js application
CMD ["npm", "run", "start:dev"]


# sudo docker build -t nestApi .
