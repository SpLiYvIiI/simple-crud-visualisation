# Simple crud

Racxa crud-io tu racxa universitetistvis

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

### Run container on port 3000
```
docker run  -p 3000:3000 xelladze22/simple-crud
```

