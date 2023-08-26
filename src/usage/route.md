# Route

[[toc]]

You can generate a route by following command.

```bash
php artisan better:route
```

### Arguments

- route : name of the generated route file
- versionOrDirectory (optional) : version of the route or directory where the route file will be generated

### Options

- --api : generated route file will be store in a api See more at
  - [Configuration](/configuration.html#config)
  - [BetterLaravelServiceProvider.php](https://github.com/laranex/better-laravel/blob/master/src/BetterLaravelServiceProvider.php#L46)
  - [RouteMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/RouteMakeCommand.php)
- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
