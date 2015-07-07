# node-study callShell

main.js will execute the binary built from main.cpp,


### Setup & Run
```
> npm install
> npm start   (the alias for "node main.js")
```


Note: Below command will build main.cpp to main
```
> npm run build (the alias for "gcc main.cpp -o main")
```

(main will return factorial result)


#### For windows user, need more steps for setup

1. Install gcc  (http://sourceforge.net/projects/mingw/?source=typ_redirect)

2. Build binary (npm run build)

3. Modify main.js, replace './main ' by 'main.exe '
