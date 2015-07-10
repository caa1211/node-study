# node-study callShellWithServerAndThree

main.js will run a http server in http://127.0.0.1:1337


### Setup
```
> npm install
```

### 1. Run Static Server or open local html file directly (serve cube.html)
```
> npm run static-server
```

### 2. Run Api Server (serve api)
```
> npm run api-server
```

### Link to: http://localhost:8080/cube.html

### Response

http://localhost:8080/cube.html -> html response: three.js demo

http://127.0.0.1:1337/api?argv=5 -> json response: {"status":0,"output":"120"}


### CORS ISSUE:
Because cube.html and api server in the different domain, use cube.html to query api server directly will suffer "Access-Control-Allow-Origin" issue as below image.
(cors.png)

Solution: add below two response headers to allow all domains access
 - "Access-Control-Allow-Origin": "*",
 - "Access-Control-Allow-Headers": "Content-Type"
