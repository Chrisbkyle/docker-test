FROM node:12.13.0-alpine AS alpine
RUN mkdir /app/server
WORKDIR /app

COPY package.json /app/server
RUN npm install
COPY . /app/server

EXPOSE 3001

CMD ["npm", "start"]