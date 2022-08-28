import { extend } from "flarum/common/extend";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import SignUpModal from "flarum/forum/components/SignUpModal";

app.initializers.add("nearata-signup-confirm-password", () => {
    extend(SignUpModal.prototype, "oninit", function () {
        this.confirmPassword = Stream("");
    });

    extend(SignUpModal.prototype, "fields", function (items) {
        if (!items.has("password")) {
            return;
        }

        items.add(
            "nearataConfirmPassword",
            m(".Form-group", [
                m("input.FormControl", {
                    name: "confirmPassword",
                    type: "password",
                    placeholder: app.translator.trans(
                        "nearata-signup-confirm-password.forum.field_placeholder"
                    ),
                    bidi: this.confirmPassword,
                    disabled: this.loading,
                }),
            ]),
            10
        );
    });

    extend(SignUpModal.prototype, "submitData", function (data) {
        if (!("password" in data)) {
            return;
        }

        data.confirmPassword = this.confirmPassword();
    });
});
