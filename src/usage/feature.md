# Feature

[[toc]]

You can generate a feature by following command.

```bash
php artisan better:feature StoreBlog Blog
```
::: info
Generated feature will be at `app/Modules/BlogModule/Features/StoreBlogFeature.php`
:::
### Arguments

- feature : name of the generated feature file
- module : name of the module where the feature file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [FeatureMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/FeatureMakeCommand.php)
