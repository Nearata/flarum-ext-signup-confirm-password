<?php

namespace Nearata\SignUpConfirmPassword\Listeners;

use Flarum\Foundation\ValidationException;
use Flarum\Locale\Translator;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class CheckingConfirmPassword
{
    public function handle(Saving $event)
    {
        $data = Arr::get($event->data, 'attributes', []);

        $confirmPassword = $data['confirmPassword'];
        $email = $data['email'];
        $password = $data['password'];
        $username = $data['username'];

        if (!empty($username) && !empty($email) && !empty($password) && strlen($password) >= 8) {
            $translator = app(Translator::class);

            if (empty($confirmPassword)) {
                throw new ValidationException([
                    'confirmPassword' => $translator->trans('nearata-signup-confirm-password.forum.field_required')
                ]);
            }

            if (strlen($confirmPassword) < 8) {
                throw new ValidationException([
                    'confirmPassword' => $translator->trans('nearata-signup-confirm-password.forum.password_min_length')
                ]);
            }

            if (strcmp($password, $confirmPassword) !== 0) {
                throw new ValidationException([
                    'confirmPassword' => $translator->trans('nearata-signup-confirm-password.forum.passwords_not_match')
                ]);
            }
        }
    }
}
