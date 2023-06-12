FROM node:16-alpine
ENV NODE_ENV="development"
WORKDIR /server

COPY package.json .
COPY package-lock.json .


RUN npm install

EXPOSE 80

CMD ["node", "index.js"]