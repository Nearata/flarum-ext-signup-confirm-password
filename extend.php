<?php

namespace Nearata\SignUpConfirmPassword;

use Flarum\Extend;
use Flarum\User\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    function (Dispatcher $events) {
        $events->listen(Saving::class, Listeners\CheckingConfirmPassword::class);
    }
];
