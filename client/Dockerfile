FROM node:12.13.0-alpine AS alpine
RUN mkdir /app/client
RUN cd client
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run"]