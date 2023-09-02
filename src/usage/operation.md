# Operation

[[toc]]

You can generate an operation by following command.

```bash
php artisan better:operation NotifySubscribersOperation Blog
```
::: info
Generated operation will be at `app/Modules/BlogModule/Operations/NotifySubscribersOperation.php`
:::
### Arguments

- operation : name of the generated operation file
- module : name of the module where the operation file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [OperationMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/OperationMakeCommand.php)

### Calling Jobs From Operation
Calling this job from a feature or an operation is straightforward using run method.
:::warning
Operation must extend the Better Laravel operation `Laranex\BetterLaravel\Cores\Operation` to work with the `run` method.
:::
```php
use App\Domains\Blog\Jobs\NotifyViaEmailJob;
use App\Domains\Blog\Jobs\NotifyViaPushNotificationJob;
use Laranex\BetterLaravel\Cores\Operation;

class NotifySubscribersOperation extends Operation
{
    private array $payload;

    public function __construct(array $payload)
    {
        $this->payload = $payload;
    }

    public function handle(): void
    {
        $this->run(new NotifyViaEmailJob($this->payload));
        $this->run(new NotifyViaPushNotificationJob($this->payload));
    }
}
```

### Calling Queue Jobs From Operation
Calling queue job from a feature or an operation is straightforward using runInQueue method.
:::warning
Operation must extend the Better Laravel operation `Laranex\BetterLaravel\Cores\Operation` to work with the `runInQueue` method.
:::
```php
use App\Domains\Blog\Jobs\NotifyViaEmailJob;
use App\Domains\Blog\Jobs\NotifyViaPushNotificationJob;
use Laranex\BetterLaravel\Cores\Operation;

class NotifySubscribersOperation extends Operation
{
    private array $payload;

    public function __construct(array $payload)
    {
        $this->payload = $payload;
    }

    public function handle(): void
    {
        $this->runInQueue(new NotifyViaEmailJob($this->payload));
        
        $this->runInQueue(new NotifyViaPushNotificationJob($this->payload));
    }
}
```
