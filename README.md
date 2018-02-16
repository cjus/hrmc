# hrmc
Hydra Router Message Client

## Commands

### Open connection to HydraRouter

```shell
➤ client.open('ws://localhost:5353');
```

### Close connection to HydraRouter

```shell
➤ client.close();
```

### Reopen connection to HydraRouter

```shell
➤ client.reopen();
```

### Create a UMF message

```shell
➤ client.createMessage();
```

### Send a UMF message to HydraRouter

```shell
➤ client.sendMessage('{"to":"hydra-router:/","frm":"9vnwcm1spj@client:/","mid":"d29d78dd-eed5-4378-af18-9bf9c3076578","ts":"2018-02-16T13:32:45.828Z","ver":"UMF/1.4.6","typ":"ping","bdy":{}}');
```

```shell
➤ client.sendMessage('{"to":"hydra-router:[GET]/v1/router/list/services","frm":"28j9ce93lzr@client:/","mid":"d29d78dd-eed5-4378-af18-9bf9c3076578","ts":"2018-02-16T13:32:45.828Z","ver":"UMF/1.4.6","bdy":{}}');
```

### Pretty print a JSON string

```shell
➤ client.jsonPrint('{"to":"1tbjxsl59lv@client:/","frm":"7dd80a249fa54815bc5cbfc60d344175@hydra-router:/","mid":"364a4eda-0a57-4339-8dd0-e7ebc66c56ce","ts":"2018-02-16T21:50:35.656Z","ver":"UMF/1.4.6","bdy":[{"serviceName":"hydra-router","serviceDescription":"Service Router","version":"1.6.0","instanceID":"7dd80a249fa54815bc5cbfc60d344175","updatedOn":"2018-02-16T21:50:33.383Z","processID":11576,"ip":"10.1.10.5","port":"5353","hostName":"Administrators-MacBook-Pro-2.local","updatedOnTS":1518817835430,"sampledOn":"2018-02-16T21:50:33.383Z","architecture":"x64","platform":"darwin","nodeVersion":"v8.9.4","memory":{"rss":40783872,"heapTotal":21905408,"heapUsed":17851792,"external":84234},"uptimeSeconds":370.59,"log":[{"ts":"2018-02-16T21:43:32.274Z","serviceName":"hydra-router","type":"error","processID":11555,"msg":"Service is shutting down."},{"ts":"2018-02-16T21:41:59.470Z","serviceName":"hydra-router","type":"info","processID":11555,"msg":"Starting service hydra-router:1.6.0 on 10.1.10.5:5353"}]}]}');
```

```shell
➤ client.sendMessage('{"to":"hmr-service:/","frm":"d73qzhco1n@client:/","mid":"d29d78dd-eed5-4378-af18-9bf9c3076578","ts":"2018-02-16T13:32:45.828Z","ver":"UMF/1.4.6","bdy":{}}');
```



