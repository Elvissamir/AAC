# etapa de compilación
FROM node:16-alpine3.14
WORKDIR /var/www
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80
