# node-study callShellWithServer

main.js will run a http server in http://127.0.0.1:1337,
and the server will execute main with argv url parameter and send response to the browser.

ex: http://127.0.0.1:1337/?argv=123456

### Run
```
> npm install
> npm start   (the alias for "node main.js")
```

### Response

http://127.0.0.1:1337/?argv=123456 -> output: Your Parameter: 123456.
http://127.0.0.1:1337/ -> output: Default value

