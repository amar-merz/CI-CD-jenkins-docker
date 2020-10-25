FROM alpine:latest
RUN  apk add --no-cache nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY src src
EXPOSE 8080
CMD ["node","src/index.js"]

