FROM node:16-alpine
ENV NODE_ENV="development"
WORKDIR /

COPY package.json .
COPY package-lock.json .

EXPOSE 3000

CMD ["npm", "start"]