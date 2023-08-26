# Job

[[toc]]

You can generate a job by following command.

```bash
php artisan better:job StoreBlog Blog
```
::: info
Generated job will be at `app/Domains/Blog/Jobs/StoreBlogJob.php`
:::
### Arguments

- job : name of the generated job file
- domain : name of the domain where the job file will be generated

### Options
- --queue : the job will be generated as queueable job
- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [JobMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/JobMakeCommand.php)