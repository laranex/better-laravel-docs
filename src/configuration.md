# Configuration

[[toc]]

## Publishable Assets

:::info Note

Publishing the package assets is optional and you are not required to do this if you don't need to.
:::

### config

You may run the following command to publish the configuration file.

```bash
php artisan vendor:publish --tag=better-laravel-config
```

Following is the default configuration file, and you are free to update the values as per your need.

```php
return [
    'enable_routes' => env('BETTER_LARAVEL_ENABLE_ROUTES', true),
];
```

| Option        | Default |                                                           Action |
|---------------|:-------:|-----------------------------------------------------------------:|
| enable_routes |  true   | Should the package load the routes from routes/api & routes/web? |

### Provider

Currently, the package doesn't support this feature yet. But we will make it happen soon.

### Stubs

Currently, the package doesn't support this feature yet. But we will make it happen soon.


