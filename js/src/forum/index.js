import app from 'flarum/app';
import { extend } from 'flarum/extend';
import SignUpModal from 'flarum/components/SignUpModal';

app.initializers.add('nearata/flarum-ext-signup-confirm-password', () => {
    extend(SignUpModal.prototype, 'oninit', function() {
        this.confirmPassword = '';
    });

    extend(SignUpModal.prototype, 'fields', function(items) {
        items.add(
            'confirmPassword',
            m('.Form-group', [
                m('input.FormControl', {
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: app.translator.trans('nearata-signup-confirm-password.forum.field_placeholder'),
                    value: this.confirmPassword,
                    oninput: e => this.confirmPassword = e.target.value,
                    disabled: this.loading
                })
            ]),
            10
        );
    });

    extend(SignUpModal.prototype, 'submitData', function(data) {
        data.confirmPassword = this.confirmPassword;
    });
});
