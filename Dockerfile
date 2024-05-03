FROM node:20-alpine

WORKDIR /app

COPY ./app/package*.json ./

# Set entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# Install dependencies
RUN npm install

# Copy application files
COPY ./app .

EXPOSE 3000

CMD ["npm", "run", "dev"]
# CMD ["tail", "-f", "/dev/null"]
