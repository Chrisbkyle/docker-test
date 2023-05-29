FROM node:19-alpine
WORKDIR /server
COPY . .

EXPOSE 80

RUN npm install

RUN node index.js