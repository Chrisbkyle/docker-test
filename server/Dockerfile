FROM node:20-alpine AS alpine
# RUN ls -la
WORKDIR /usr/src/app

COPY . .

# RUN apt-get update && apt-get upgrade -y && \
#     apt-get install -y nodejs \
#     npm

RUN npm install
RUN npm install -g nodemon

EXPOSE 3001

CMD ["nodemon", "index.js"]