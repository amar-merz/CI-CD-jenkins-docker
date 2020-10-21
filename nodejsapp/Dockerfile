FROM node:12.18.1
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN  npm install --only=profduction
COPY src src
CMD ["npm","start"]

