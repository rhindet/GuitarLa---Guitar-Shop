import {
  ListadoPosts
} from "/build/_shared/chunk-EQFXTU6K.js";
import {
  require_post
} from "/build/_shared/chunk-BCAZKRQG.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/blog/index.jsx
var import_post = __toESM(require_post());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return {
    title: "GuitarLA - Nuestro Blog",
    descripcion: "GuitarLA, Blog de musica y venta de guitarras"
  };
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoPosts, {
    posts
  }, void 0, false, {
    fileName: "app/routes/blog/index.jsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}
var blog_default = Blog;
export {
  blog_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/index-4C5YIVMT.js.map
