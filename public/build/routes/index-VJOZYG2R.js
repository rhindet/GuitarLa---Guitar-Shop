import {
  blog_default
} from "/build/_shared/chunk-5LQDZUB7.js";
import {
  ListadoPosts
} from "/build/_shared/chunk-EQFXTU6K.js";
import {
  require_post
} from "/build/_shared/chunk-BCAZKRQG.js";
import {
  guitarras_default
} from "/build/_shared/chunk-ZF5RFZ34.js";
import {
  ListadoGuitarras
} from "/build/_shared/chunk-ICKQSSPB.js";
import {
  require_guitarras
} from "/build/_shared/chunk-AM7WKS3L.js";
import {
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// empty-module:~/models/curso.server
var require_curso = __commonJS({
  "empty-module:~/models/curso.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/index.jsx
init_esm();
var import_guitarras = __toESM(require_guitarras());
var import_post = __toESM(require_post());
var import_curso = __toESM(require_curso());

// app/components/curso.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "curso",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
        jsx: "true",
        children: `
            .curso{
                background-image:linear-gradient(to right,rgb(0 0 0 / .65),rgb(0 0 0 / .7)),url(${imagen.data.attributes.url})}
            `
      }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenedor curso-grid",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "contenido",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "heading",
              children: titulo
            }, void 0, false, {
              fileName: "app/components/curso.jsx",
              lineNumber: 17,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "texto",
              children: contenido
            }, void 0, false, {
              fileName: "app/components/curso.jsx",
              lineNumber: 18,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/curso.jsx",
          lineNumber: 16,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/components/curso.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/curso.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

// app/styles/curso.css
var curso_default = "/build/_assets/curso-46NNXVWH.css";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default
    }
  ];
}
function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "contenedor",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoGuitarras, {
          guitarras
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Curso, {
        curso: curso.attributes
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "contenedor",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoPosts, {
          posts
        }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/index.jsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var routes_default = Index;
export {
  routes_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-VJOZYG2R.js.map
