FROM node:12.13.0-alpine AS alpine
RUN cd app
RUN ls -la
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run"]