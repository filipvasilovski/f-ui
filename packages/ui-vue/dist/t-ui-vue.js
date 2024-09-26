(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(":root{--color-primary: #2563eb;--color-primary-90: #1d4ed8;--color-primary-foreground: #ffffff;--color-destructive: #dc2626;--color-destructive-90: #be123c;--color-destructive-foreground: #ffffff}._button_id88u_1{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;border-radius:.375rem;font-size:.875rem;font-weight:500;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);outline:none;pointer-events:auto;opacity:1}._button_id88u_1:focus-visible{outline:2px solid transparent;outline-offset:2px;box-shadow:0 0 0 2px var(--ring-color),0 0 0 4px var(--ring-offset-color)}._button_id88u_1:disabled{pointer-events:none;opacity:.5}._default_id88u_37{background-color:var(--color-primary);color:var(--color-primary-foreground)}._default_id88u_37:hover{background-color:var(--color-primary-90)}._destructive_id88u_46{background-color:var(--color-destructive);color:var(--color-destructive-foreground)}._destructive_id88u_46:hover{background-color:var(--color-destructive-90)}")),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as k, openBlock as B, createElementBlock as h, normalizeClass as j, unref as A, renderSlot as O } from "vue";
function _(t) {
  var e, n, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) for (e = 0; e < t.length; e++) t[e] && (n = _(t[e])) && (a && (a += " "), a += n);
  else for (e in t) t[e] && (a && (a += " "), a += e);
  return a;
}
function g() {
  for (var t, e, n = 0, a = ""; n < arguments.length; ) (t = arguments[n++]) && (e = _(t)) && (a && (a += " "), a += e);
  return a;
}
const m = (t) => typeof t == "boolean" ? "".concat(t) : t === 0 ? "0" : t, y = g, x = (t, e) => (n) => {
  var a;
  if ((e == null ? void 0 : e.variants) == null) return y(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: c, defaultVariants: s } = e, b = Object.keys(c).map((r) => {
    const u = n == null ? void 0 : n[r], o = s == null ? void 0 : s[r];
    if (u === null) return null;
    const l = m(u) || m(o);
    return c[r][l];
  }), v = n && Object.entries(n).reduce((r, u) => {
    let [o, l] = u;
    return l === void 0 || (r[o] = l), r;
  }, {}), C = e == null || (a = e.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((r, u) => {
    let { class: o, className: l, ...V } = u;
    return Object.entries(V).every((N) => {
      let [f, i] = N;
      return Array.isArray(i) ? i.includes({
        ...s,
        ...v
      }[f]) : {
        ...s,
        ...v
      }[f] === i;
    }) ? [
      ...r,
      o,
      l
    ] : r;
  }, []);
  return y(t, b, C, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, F = "_button_id88u_1", P = "_destructive_id88u_46", d = {
  button: F,
  default: "_default_id88u_37",
  destructive: P
}, S = x(d.button, {
  variants: {
    variant: {
      default: d.default,
      destructive: d.destructive
    }
  }
}), z = /* @__PURE__ */ k({
  __name: "Button",
  props: {
    variant: { default: "default" }
  },
  setup(t) {
    return (e, n) => (B(), h("button", {
      class: j(A(S)({ variant: e.variant }))
    }, [
      O(e.$slots, "default")
    ], 2));
  }
}), K = {
  install: (t) => {
    t.component("FButton", z);
  }
};
export {
  z as FButton,
  K as default
};
