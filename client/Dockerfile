FROM node:12.13.0-alpine AS alpine
RUN cd ..

WORKDIR /app

RUN ls -la

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run"]