import {
  Link2 as Link,
  init_esm
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/components/guitarra.jsx
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Guitarra({ guitarra }) {
  const { descripcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "guitarra",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imagen.data.attributes.formats.medium.url,
        alt: `Imagen guitarra ${nombre}`
      }, void 0, false, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: nombre
          }, void 0, false, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "descripcion",
            children: descripcion
          }, void 0, false, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "precio",
            children: [
              "$",
              precio
            ]
          }, void 0, true, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            className: "enlace",
            to: `/guitarras/${url}`,
            children: "Ver Producto"
          }, void 0, false, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "heading",
        children: "Nuestra Coleccion"
      }, void 0, false, {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 6,
        columnNumber: 13
      }, this),
      (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "guitarras-grid",
        children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Guitarra, {
          guitarra: guitarra == null ? void 0 : guitarra.attributes
        }, guitarra == null ? void 0 : guitarra.id, false, {
          fileName: "app/components/listado-guitarras.jsx",
          lineNumber: 12,
          columnNumber: 29
        }, this))
      }, void 0, false, {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

export {
  ListadoGuitarras
};
//# sourceMappingURL=/build/_shared/chunk-ICKQSSPB.js.map
