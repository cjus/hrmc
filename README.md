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

### Create a UMF message

```shell
➤ client.createMessage();
```

### Send a UMF message to HydraRouter

```shell
➤ client.sendMessage('{"to":"hydra-router:/","frm":"9vnwcm1spj@client:/","mid":"d29d78dd-eed5-4378-af18-9bf9c3076578","ts":"2018-02-16T13:32:45.828Z","ver":"UMF/1.4.6","typ":"ping","bdy":{}}');
```

