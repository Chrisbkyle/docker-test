FROM ubuntu:22.04
WORKDIR /server

COPY package.json .
COPY package-lock.json .


RUN sudo npm install
RUN sudo npm install -g nodemon

EXPOSE 80

CMD ["node", "index.js"]