FROM node:18-alpine 

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install
RUN npm install mongodb 
# Copy the server-side source code to the container
COPY . .

# Set environment variables for the MongoDB connection
ENV MONGO_URI mongodb+srv://hmissi22:Ah@123456789@cluster0.sdqzl5l.mongodb.net/Projet_fin?retryWrites=true&w=majority

# Expose the port that the server will listen on
EXPOSE 5000

# Start the server
CMD ["npm", "start"]