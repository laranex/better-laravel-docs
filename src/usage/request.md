# Request

[[toc]]

You can generate a request by following command.

```bash
php artisan better:request StoreBlog Blog
```
::: info
Generated request will be at `app/Domains/Blog/Requests/StoreBlogRequest.php`
:::
### Arguments

- request : name of the generated request file
- domain : name of the domain where the request file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [RequestMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/RequestMakeCommand.php)
