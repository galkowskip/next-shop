# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your Next.js app is listening on
EXPOSE 4200

# Start the Next.js development server with hot-reloading
CMD ["npm", "run", "dev"]