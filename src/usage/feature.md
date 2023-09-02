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

### Running Jobs
:::warning
Feature must extend the Better Laravel feature `Laranex\BetterLaravel\Cores\Feature` to work with the `run` or `runInQueue` method.
:::
Running jobs from a feature or an operation is straightforward using `run` method.
```php
use App\Domains\Blog\Jobs\StoreBlogJob;
use App\Domains\Blog\Requests\StoreBlogRequest;
use Laranex\BetterLaravel\Cores\Feature;

class StoreBlogFeature extends Feature
{
    public function handle(StoreBlogRequest $request): Blog
    {
        return $this->run(StoreBlogJob::class, ['payload' => $request->validated()]);
        //Or
        return $this->run(new StoreBlogJob($request->validated()));
        //Or
        return $this->run(new StoreBlogJob(payload: $request->validated()));
    }
}
```

### Running Queue Jobs
Running queue jobs from a feature or an operation is straightforward using `runInQueue` method.
```php
use App\Domains\Blog\Jobs\StoreBlogJob;
use App\Domains\Blog\Requests\StoreBlogRequest;
use Laranex\BetterLaravel\Cores\Feature;

class StoreBlogFeature extends Feature
{
    public function handle(StoreBlogRequest $request): Blog
    {
        $blog = $this->run(new StoreBlogJob($request->validated()));
        
        $this->runInQueue(new NotifyViaEmailJob($blog));
        
        return $blog;
    }
}
```

### Running Operations
An Operation can be run using the `run` method.
```php
use App\Domains\Blog\Jobs\StoreBlogJob;
use App\Domains\Blog\Requests\StoreBlogRequest;
use App\Models\Blog;
use App\Modules\BlogModule\Operations\NotifySubscribersOperation;
use Laranex\BetterLaravel\Cores\Feature;

class StoreBlogFeature extends Feature
{
    public function handle(StoreBlogRequest $request): Blog
    {
        $blog = $this->run(new StoreBlogJob($request->validated()));
        
        $this->run(new NotifySubscribersOperation($blog));
        
        return $blog;
    }
}
```
