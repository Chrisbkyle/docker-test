FROM node:12.13.0-alpine AS alpine

WORKDIR /app

COPY package.json /docker-test/

RUN npm install

COPY . .

CMD ["npm", "run"]