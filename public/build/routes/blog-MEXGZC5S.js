import {
  blog_default
} from "/build/_shared/chunk-5LQDZUB7.js";
import {
  Outlet,
  init_esm
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/blog.jsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{
    rel: "stylesheet",
    href: blog_default
  }];
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "contenedor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;
export {
  blog_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/blog-MEXGZC5S.js.map
