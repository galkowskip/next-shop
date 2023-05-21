# Use the official Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# # Build the Next.js app
# RUN npm run build

# Expose the port for the Next.js app to run on
EXPOSE 4200

# Start the Next.js app
CMD ["npm", "run", "dev"]