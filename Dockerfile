FROM node:alpine

# Создать директорию app
WORKDIR /app

# Установить зависимости приложения
# Используется символ подстановки для копирования как package.json, так и package-lock.json,
# работает с npm@5+
COPY package*.json ./
COPY front /app

RUN yarn install
RUN cd front && yarn
# Используется при сборке кода в продакшене
# RUN npm install --only=production

# Скопировать исходники приложения
COPY index.js /app


EXPOSE 8888
CMD [ "node", "index.js" ]
