FROM node:12.13.0-alpine AS alpine
RUN ls -la
WORKDIR /docker-test

COPY package.json /docker-test/
RUN npm install
COPY . .

EXPOSE 3001

CMD ["npm", "start"]