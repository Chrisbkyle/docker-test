FROM node:19-alpine
WORKDIR /
COPY package.json .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]