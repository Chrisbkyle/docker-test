FROM node.16
WORKDIR /client
COPY . .

RUN npm run build
EXPOSE 3000

CMD npm start