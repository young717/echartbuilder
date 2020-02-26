FROM node:alpine

WORKDIR /app

EXPOSE 80

COPY package*.json ./

RUN apk update
RUN apk upgrade
RUN apk add nodejs
RUN apk add npm

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install cnpm -g --registry=https://r.npm.taobao.org
RUN cnpm i 

COPY . .

ENV TZ=Asia/Shanghai

CMD ["node", "index.js"]