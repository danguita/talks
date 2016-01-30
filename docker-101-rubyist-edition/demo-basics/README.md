# Docker 101 Rubyist edition sample code

## Demo steps

### Docker build

```shell
$ docker build --tag demo/sinatra .
```

### Docker run

```shell
$ docker run --rm -p 4567:4567 demo/sinatra
```

### Service request

```shell
$ curl docker_host:4567
```

