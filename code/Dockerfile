# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container to /app
WORKDIR /app

# Copy both package.json and package-lock.json (if present) into the working directory
COPY package*.json ./

# Install project dependencies inside the container
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Build the application for production using the "build" script from package.json
RUN npm run build

# Expose port 4173 to allow access to the Vite preview server
EXPOSE 4173

# Define the command to start the Vite preview server when the container runs
CMD ["npx", "vite", "preview", "--host"]