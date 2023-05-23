import { extend } from "flarum/common/extend";
import Stream from "flarum/common/utils/Stream";
import app from "flarum/forum/app";
import SignUpModal from "flarum/forum/components/SignUpModal";

/**
 * ref: https://github.com/flarum/framework/blob/v1.7.1/framework/core/js/src/forum/components/SignUpModal.tsx
 */
app.initializers.add("nearata-signup-confirm-password", () => {
  extend(SignUpModal.prototype, "oninit", function () {
    this.confirmPassword = Stream("");
  });

  extend(SignUpModal.prototype, "fields", function (items) {
    if (this.attrs.token) {
      return;
    }

    const placeholder = app.translator.trans(
      "nearata-signup-confirm-password.forum.field_placeholder"
    );

    items.add(
      "nearataConfirmPassword",
      <div class="Form-group">
        <input
          className="FormControl"
          name="confirmPassword"
          type="password"
          autocomplete="new-password"
          placeholder={placeholder}
          aria-label={placeholder}
          bidi={this.confirmPassword}
          disabled={this.loading}
        />
      </div>,
      10
    );
  });

  extend(SignUpModal.prototype, "submitData", function (data) {
    if (!this.attrs.token) {
      data.confirmPassword = this.confirmPassword();
    }
  });
});
