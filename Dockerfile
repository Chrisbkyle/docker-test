FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client
RUN npm install
RUN npm start

FROM node:10 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY server/package*json ./server/

EXPOSE 3080

CMD ["node", "./server/index.js"]