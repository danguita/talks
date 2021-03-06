# Docker 101 Rubyist edition sample code

## Project setup

```shell
$ docker-compose run web bundle
$ docker-compose run web bundle exec rake db:setup db:test:prepare
$ docker-compose up -d
```

## Demo steps

### Docker processes and port redirection

```shell
$ docker-compose ps
```

### Rails console

```shell
$ docker-compose run web bundle exec rails c
```

### Test container with default command

```shell
$ docker-compose run test
```

### List linked hostnames

```shell
$ docker-compose run web bash
> $ cat /etc/hosts
> $ curl elasticsearch:9200
```

### Scale web front-ends

```shell
$ docker-compose scale web=3
$ docker-compose up -d --force-recreate # Recreate haproxy container to discover new nodes
$ curl docker_host:8080/secrets.json # Perform a HTTP request
$ docker-compose logs web # Watch the HTTP requests being delivered through the Load Balancer
$ open http://docker_host:1936 # HAProxy Stats
```

