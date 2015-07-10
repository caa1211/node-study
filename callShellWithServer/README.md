# node-study callShellWithServer

main.js will run a http server in http://127.0.0.1:1337,
and the server will execute main with argv url parameter and send response to the browser.

### Setup
```
> npm install
```

### Run Server
```
> npm start   (the alias for "node main.js")
```

### Link: http://127.0.0.1:1337/api?argv=5

### Response

http://127.0.0.1:1337/api?argv=5 -> output: 5! = 120

http://127.0.0.1:1337/api -> ! = 1

(main will return factorial result)

#### For windows user, need more steps for setup

1. Install gcc  (http://sourceforge.net/projects/mingw/?source=typ_redirect)

2. Build binary (npm run build)

3. Modify main.js, replace './main ' by 'main.exe '
