module.exports=function(t){var r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=r,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)o.d(e,n,function(r){return t[r]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=4)}([function(t,r){t.exports=flarum.core.compat["common/extend"]},function(t,r){t.exports=flarum.core.compat["forum/components/SignUpModal"]},function(t,r){t.exports=flarum.core.compat["forum/app"]},function(t,r){t.exports=flarum.core.compat["common/utils/Stream"]},function(t,r,o){"use strict";o.r(r);var e=o(0),n=o(2),a=o.n(n),i=o(1),u=o.n(i),c=o(3),f=o.n(c);a.a.initializers.add("nearata-signup-confirm-password",(function(){Object(e.extend)(u.a.prototype,"oninit",(function(){this.confirmPassword=f()("")})),Object(e.extend)(u.a.prototype,"fields",(function(t){t.add("nearataConfirmPassword",m(".Form-group",[m("input.FormControl",{name:"confirmPassword",type:"password",placeholder:a.a.translator.trans("nearata-signup-confirm-password.forum.field_placeholder"),bidi:this.confirmPassword,disabled:this.loading})]),10)})),Object(e.extend)(u.a.prototype,"submitData",(function(t){t.confirmPassword=this.confirmPassword()}))}))}]);
//# sourceMappingURL=forum.js.map