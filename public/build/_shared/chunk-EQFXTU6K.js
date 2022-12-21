import {
  formatearFecha
} from "/build/_shared/chunk-BCAZKRQG.js";
import {
  Link2 as Link,
  init_esm
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/components/post.jsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    className: "post",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imagen.data.attributes.formats.small.url,
        alt: `imagen blog ${titulo}`,
        className: "imagen"
      }, void 0, false, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: titulo
          }, void 0, false, {
            fileName: "app/components/post.jsx",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "fecha",
            children: formatearFecha(publishedAt)
          }, void 0, false, {
            fileName: "app/components/post.jsx",
            lineNumber: 16,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "resumen",
            children: contenido
          }, void 0, false, {
            fileName: "app/components/post.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            className: "enlace",
            to: `/blog/${url}`,
            children: "Leer Post"
          }, void 0, false, {
            fileName: "app/components/post.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/post.jsx",
    lineNumber: 11,
    columnNumber: 4
  }, this);
}

// app/components/listado-post.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "heading",
        children: "Blog"
      }, void 0, false, {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 6,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "blog",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Post, {
          post: post.attributes
        }, post.id, false, {
          fileName: "app/components/listado-post.jsx",
          lineNumber: 9,
          columnNumber: 21
        }, this))
      }, void 0, false, {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 7,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/listado-post.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

export {
  ListadoPosts
};
//# sourceMappingURL=/build/_shared/chunk-EQFXTU6K.js.map
