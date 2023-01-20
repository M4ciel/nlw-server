FROM node:14-alpine

RUN npm i -g @adonisjs/cli

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["adonis", "serve", "--dev"]