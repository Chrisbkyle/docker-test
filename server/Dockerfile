FROM node:16-alpine
ENV NODE_ENV="development"
WORKDIR /

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "index.js"]