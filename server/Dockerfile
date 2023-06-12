FROM ubuntu:22.04
WORKDIR /app/server

COPY package.json .
COPY package-lock.json .


RUN npm init
RUN npm install
RUN npm install -g nodemon

EXPOSE 80

CMD ["node", "index.js"]