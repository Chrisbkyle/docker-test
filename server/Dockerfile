FROM node:19-alpine
WORKDIR /

CMD  ["CD", "server"]

COPY package.json .

EXPOSE 80

RUN npm install

CMD ["node", "index.js"]