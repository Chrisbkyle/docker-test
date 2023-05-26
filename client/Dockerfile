FROM node:19-alpine
WORKDIR /client
COPY . .

RUN npm run build
EXPOSE 3000

CMD npm start