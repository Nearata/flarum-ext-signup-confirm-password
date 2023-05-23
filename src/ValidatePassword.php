<?php

namespace Nearata\SignUpConfirmPassword;

use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

/**
 * ref: https://github.com/flarum/framework/blob/v1.7.1/framework/core/src/User/Command/RegisterUserHandler.php
 */
class ValidatePassword
{
    /**
     * @var PasswordValidator
     */
    protected $passwordValidator;

    public function __construct(PasswordValidator $passwordValidator)
    {
        $this->passwordValidator = $passwordValidator;
    }

    public function handle(Saving $event)
    {
        if ($event->user->exists) {
            return;
        }

        $data = $event->data;

        /**
         * User is registering from Auth Provider
         */
        if (isset($data['attributes']['token'])) {
            return;
        }

        $password = Arr::get($data, 'attributes.password');
        $password_confirmation = Arr::get($data, 'attributes.confirmPassword');

        $this->passwordValidator->assertValid(array_merge($event->user->getAttributes(), compact('password'), compact('password_confirmation')));
    }
}
