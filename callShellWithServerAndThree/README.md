# node-study callShellWithServerAndThree

main.js will run a http server in http://127.0.0.1:1337

### Setup
```
> npm install
```

### Run Server
```
> npm start   (the alias for "node main.js")
```

### Link: http://127.0.0.1:1337/

### Response

http://127.0.0.1:1337/ -> html response: three.js demo

http://127.0.0.1:1337/api?argv=5 -> json response: {"status":0,"output":"120"}

(main will return factorial result)

#### For windows user, need more steps for setup

1. Install gcc  (http://sourceforge.net/projects/mingw/?source=typ_redirect)

2. Build binary (npm run build)

3. Modify main.js, replace './main ' by 'main.exe '
