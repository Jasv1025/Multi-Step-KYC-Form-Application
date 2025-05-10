# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --include=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]