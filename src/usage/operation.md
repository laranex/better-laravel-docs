# Operation

[[toc]]

You can generate an operation by following command.

```bash
php artisan better:operation StoreBlog Blog
```
::: info
Generated operation will be at `app/Modules/BlogModule/Operations/StoreBlogOperation.php`
:::
### Arguments

- operation : name of the generated operation file
- module : name of the module where the operation file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [OperationMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/OperationMakeCommand.php)
