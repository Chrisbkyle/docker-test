FROM node:14-alpine AS alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .
RUN npm build
CMD ["npm", "start"]  