FROM node:14-alpine AS alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install


RUN npm build
CMD ["npm", "start"]  