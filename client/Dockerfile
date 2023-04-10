FROM alpine

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

RUN npm run build

COPY . .


CMD ["npm", "run", "prod"]