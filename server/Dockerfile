FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -force

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
