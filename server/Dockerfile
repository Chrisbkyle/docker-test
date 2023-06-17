FROM node:14-alpine AS alpine
# RUN ls -la
WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 3001

CMD ["nodemon", "index.js"]