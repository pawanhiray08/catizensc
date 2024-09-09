FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Set environment variables
ENV TELEGRAM_BOT_TOKEN=7249113952:AAF6EUkeLkqlfaZA3EowVhgYtNVEzzBkihQ

# Command to run the app
CMD [ "node", "bot.js" ]
