FROM node:12.13.0-alpine AS alpine
RUN mkdir /app/server
RUN cd server
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3001

CMD ["npm", "start"]