# [Simple crud](https://xelladze22-simple-crud.herokuapp.com/)

Simple crud operations visualised in react (Racxa universitetistvis)

# Prerequisites

Install [node](https://nodejs.org/en/download/). 

Check your install with `node -v && npm -v`

Install all packages with `npm install`

## To run project 

- run : `npm start`

## To start project in production mode

Build the static files with `npm run build`

This will generate them into `build` folder.

An example for serving static files:

Use npm package called serve to serve the project in port 5000:
- install: `npm install -g serve`
- serve: `serve -s -l 5000 build`

Test that the project is running by going to <http://localhost:5000>

## Docker

### Pull image
```
docker pull xelladze22/simple-crud
```

### Run container on port 5000 
container is always up to date with the repository
```
docker run  -p 5000:5000 xelladze22/simple-crud
```
you can also use watchtower so you don't have to manually pull image and rerun container

#### docker-compose file can look like this
```
version: "3"
services:
  coursematerial:
    image: xelladze22/simple-crud
    ports:
      - 5000:5000
    container_name: simple-crud
  watchtower:
    image: containrrr/watchtower
    environment:
      -  WATCHTOWER_POLL_INTERVAL=60
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    container_name: watchtowerd
 ``` 

