<?php

namespace Nearata\SignUpConfirmPassword\Listeners;

use Flarum\Foundation\Event\Validating;
use Flarum\Locale\Translator;
use Flarum\User\UserValidator;
use Flarum\User\Event\Saving;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Support\Arr;

class CheckingConfirmPassword
{
    protected $confirmPassword;

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Validating::class, [$this, 'addValidationRule']);
        $events->listen(Saving::class, [$this, 'addConfirmPasswordField']);
    }

    public function addValidationRule(Validating $event)
    {
        if (!$event->type instanceof UserValidator) {
            return;
        }

        $rules = $event->validator->getRules();

        if (!Arr::has($rules, 'password')) {
            return;
        }

        if (!Arr::has($rules, 'username')) {
            return;
        }

        $data = $event->validator->getData();
        $data['confirmPassword'] = $this->confirmPassword;
        $event->validator->setData($data);

        $event->validator->addRules([
            'confirmPassword' => array_merge($rules['password'], ['same:password'])
        ]);

        $translator = app(Translator::class);
        $event->validator->setCustomMessages([
            'confirmPassword.required' => $translator->trans('nearata-signup-confirm-password.forum.field_required'),
            'confirmPassword.min' => $translator->trans('nearata-signup-confirm-password.forum.password_min_length'),
            'confirmPassword.same' => $translator->trans('nearata-signup-confirm-password.forum.password_must_match')
        ]);
    }

    public function addConfirmPasswordField(Saving $event)
    {
        $this->confirmPassword = Arr::get($event->data, 'attributes.confirmPassword');
    }
}
