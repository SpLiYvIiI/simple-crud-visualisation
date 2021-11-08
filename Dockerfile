FROM node:16-alpine3.12 as build

WORKDIR /devapp

COPY . .

RUN npm install && npm run build

FROM node:16-alpine3.12

EXPOSE 5000

WORKDIR /prodapp

RUN mkdir build

COPY --from=build ./devapp/build ./build

RUN npm install -g serve && adduser -S client &&  \
    chown client: /prodapp && chmod 700 /prodapp 

USER client

CMD serve -s -l 5000 build
