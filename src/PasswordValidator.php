<?php

namespace Nearata\SignUpConfirmPassword;

class PasswordValidator extends \Flarum\User\UserValidator
{
    protected function getRules()
    {
        $rules = parent::getRules();

        $rules['password'][] = 'confirmed';

        return $rules;
    }
}
