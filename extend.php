<?php

namespace Nearata\SignUpConfirmPassword;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
    new Extend\Locales(__DIR__ . '/resources/locale'),
    function (Dispatcher $events) {
        $events->subscribe(Listeners\CheckingConfirmPassword::class);
    }
];
