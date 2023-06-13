FROM node:14-alpine AS alpine
# RUN ls -la
WORKDIR /usr/src/app

COPY . .
RUN npm install
# COPY . .

EXPOSE 3001

CMD ["node", "index.js"]