# Docker 101 Rubyist edition sample code

## Project setup

```shell
$ docker-compose run web bundle
$ docker-compose run web bundle exec rake db:create db:setup db:test:prepare
$ docker-compose up -d
```

## Demo steps

### Docker containers and port redirection

```shell
$ docker-compose ps
```

### Shared bundle volume

```shell
$ docker-compose run web bundle
```

### Rails console

```shell
$ docker-compose run web bundle exec rails c
```

### Test container command

```shell
$ docker-compose run test
```

### List linked hosts

```shell
$ docker-compose run web bash
> $ cat /etc/hosts
> $ curl elasticsearch:9200
```

### Scale web front-ends

```shell
$ docker-compose scale web=2
$ docker-compose up -d --force-recreate
$ docker-compose logs web
$ open http://docker_host:1936
$ curl docker_host:8080/secrets.json
```

