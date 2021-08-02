FROM node:alpine AS build

WORKDIR /devapp

COPY . .

RUN npm install

RUN npm run build

FROM node:alpine

WORKDIR /prodapp

RUN mkdir build

EXPOSE 5000

COPY --from=build ./devapp/build ./build

RUN npm install -g serve

CMD serve -s -l 5000 build