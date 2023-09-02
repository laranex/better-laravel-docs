# Controller

[[toc]]

You can generate a controller by following command.

```bash
php artisan better:controller Blog Blog
```
::: info
Generated controller will be at `app/Modules/BlogModule/Http/Controllers/BlogController.php`
:::
### Arguments

- controller : name of the generated controller file
- module : name of the module where the controller file will be generated

### Options

- --force : the command will fail if there is existing file with the given path and name, this option will delete the existing file and replace with new generated file
- See more at
  - [ControllerMakeCommand.php](https://github.com/laranex/better-laravel/blob/master/src/Commands/ControllerMakeCommand.php)

### Serving Features
:::warning
The controller must extend the Better Laravel controller `Laranex\BetterLaravel\Cores\Controller` to work with the `serve` method.
:::
All you need to do is call `serve` within the controller method.
```php
use App\Modules\BlogModule\Features\StoreBlogFeature;
use Laranex\BetterLaravel\Cores\Controller;

class BlogController extends Controller
{
    public function store()
    {
        return $this->serve(StoreBlogFeature::class);
        //OR
        return $this->serve(new StoreBlogFeature());
    }
}
```
