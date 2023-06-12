FROM node:12.13.0-alpine AS alpine
RUN mkdir /app/client
WORKDIR /app

COPY package.json /app/client

RUN npm install

COPY . /app/client

CMD ["npm", "run"]