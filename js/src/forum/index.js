import app from 'flarum/app';
import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';

app.initializers.add('nearata/flarum-ext-signup-confirm-password', () => {
    extend(SignUpModal.prototype, 'init', function() {
        this.confirmPassword = m.prop('');
    });

    extend(SignUpModal.prototype, 'fields', function(items) {
        items.add(
            'confirmPassword',
            m('.Form-group', [
                m('input.FormControl', {
                    name: 'confirmpassword',
                    type: 'password',
                    placeholder: app.translator.trans('nearata-signup-confirm-password.forum.confirm_password_placeholder'),
                    value: this.confirmPassword(),
                    onchange: m.withAttr('value', this.confirmPassword),
                    disabled: this.loading
                })
            ]),
            10
        );
    });

    extend(SignUpModal.prototype, 'submitData', function(data) {
        data.confirmPassword = this.confirmPassword();
    });
});
