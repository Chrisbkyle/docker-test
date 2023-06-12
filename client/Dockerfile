FROM ubuntu:22.04
WORKDIR /
COPY package.json .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]