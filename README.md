# hrmc
Hydra Router Message Client

HRMC is a node based REPL which embeds a client app that you can interacively use to establish a WebSocket connection to a Hydra Router. Once connected it can be used to send messages to the Hydra Router, connected Hydra-based services and connected websocket clients.

## Installing and running globally

You can install hrmc from NPM and run it as a global command.

```shell
$ npm install -g hrmc
```

## Running from a docker container

Hrmc is also available as a docker image.

```shell
$ docker run -it cjus/hrmc ./hrmc
```

## Commands

### Display help

```shell
➤ client.help();
```

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

### Get router that client is connected to

```shell
➤ client.sendMessage('{"to":"hydra-router:/","frm":"1ve4mcame6j@client:/","mid":"5cc4e3f5-ad72-41f3-a23f-212bdabc331f","ts":"2018-02-17T16:02:48.902Z","ver":"UMF/1.4.6","typ": "wsdir.loc","bdy":{"clientID": "asguyv6lq9"}}');
```

### Send message from one client to another through hydrarouter

Uses the UMF `forward` (short form `for`) key for message forwarding.

```shell
➤ client.sendMessage(`{"to": "hydra-router:/", "frm": "1eksqsc6i8f@client:/", "fwd": "2v4n1w7py5@client:/", "mid": "5cc4e3f5-ad72-41f3-a23f-212bdabc331f", "ts": "2018-02-17T16:02:48.902Z", "ver": "UMF/1.4.6", "bdy": {"msg":"Hello from 1yancbc573b"}}`);
```

### Pretty print a JSON string

```shell
➤ client.jsonPrint('{"to":"1tbjxsl59lv@client:/","frm":"7dd80a249fa54815bc5cbfc60d344175@hydra-router:/","mid":"364a4eda-0a57-4339-8dd0-e7ebc66c56ce","ts":"2018-02-16T21:50:35.656Z","ver":"UMF/1.4.6","bdy":[{"serviceName":"hydra-router","serviceDescription":"Service Router","version":"1.6.0","instanceID":"7dd80a249fa54815bc5cbfc60d344175","updatedOn":"2018-02-16T21:50:33.383Z","processID":11576,"ip":"10.1.10.5","port":"5353","hostName":"Administrators-MacBook-Pro-2.local","updatedOnTS":1518817835430,"sampledOn":"2018-02-16T21:50:33.383Z","architecture":"x64","platform":"darwin","nodeVersion":"v8.9.4","memory":{"rss":40783872,"heapTotal":21905408,"heapUsed":17851792,"external":84234},"uptimeSeconds":370.59,"log":[{"ts":"2018-02-16T21:43:32.274Z","serviceName":"hydra-router","type":"error","processID":11555,"msg":"Service is shutting down."},{"ts":"2018-02-16T21:41:59.470Z","serviceName":"hydra-router","type":"info","processID":11555,"msg":"Starting service hydra-router:1.6.0 on 10.1.10.5:5353"}]}]}');
```

```shell
➤ client.sendMessage('{"to":"hmr-service:/","frm":"d73qzhco1n@client:/","mid":"d29d78dd-eed5-4378-af18-9bf9c3076578","ts":"2018-02-16T13:32:45.828Z","ver":"UMF/1.4.6","bdy":{}}');
```

