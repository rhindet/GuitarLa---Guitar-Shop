import {
  formatearFecha,
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

// app/routes/blog/$postUrl.jsx
init_esm();
var import_post = __toESM(require_post());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Entrada No Encontrada",
      descripcion: "Guitarras , venta de guitarras , Entrada No Encontrada"
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras , venta de guitarras , entrada ${data.data[0].attributes.titulo}`
  };
}
function Post() {
  var _a, _b, _c;
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = (_a = post == null ? void 0 : post.data[0]) == null ? void 0 : _a.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    className: " post mt-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: (_c = (_b = imagen == null ? void 0 : imagen.data) == null ? void 0 : _b.attributes) == null ? void 0 : _c.url,
        alt: `imagen blog ${titulo}`,
        className: "imagen"
      }, void 0, false, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: titulo
          }, void 0, false, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "fecha",
            children: formatearFecha(publishedAt)
          }, void 0, false, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "texto",
            children: contenido
          }, void 0, false, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/blog/$postUrl.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  Post as default,
  meta
};
//# sourceMappingURL=/build/routes/blog/$postUrl-77VDVZO7.js.map
