FROM ubuntu:22.04
# RUN ls -la
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm install -g nodemon

EXPOSE 3001

CMD ["nodemon", "index.js"]