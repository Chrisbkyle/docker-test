FROM node:19-alpine
COPY . /usr/share
WORKDIR /usr/share
RUN npm install

EXPOSE 80

CMD [ "node", "index.js"]