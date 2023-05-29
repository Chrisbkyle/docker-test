FROM node:19-alpine
WORKDIR /server
COPY . /server

RUN npm install

EXPOSE 80

CMD [ "node", "index.js"]