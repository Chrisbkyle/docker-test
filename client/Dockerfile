FROM node:12.13.0-alpine AS alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

CMD ["npm", "run"]