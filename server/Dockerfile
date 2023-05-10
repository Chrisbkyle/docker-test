FROM node:19-alpine
WORKDIR /server
COPY . /server/
RUN npm run build

EXPOSE 80

CMD nodemon index