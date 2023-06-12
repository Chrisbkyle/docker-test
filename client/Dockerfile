FROM node:16-alpine
ENV NODE_ENV="development"
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY . .

EXPOSE 3000

CMD ["npm", "start"]