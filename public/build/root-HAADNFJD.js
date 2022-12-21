import {
  Link,
  Link2,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  init_esm,
  init_react_router_dom,
  useCatch,
  useLocation
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/root.jsx
var import_react = __toESM(require_react());
init_esm();

// app/styles/index.css
var styles_default = "/build/_assets/index-EBLBSMZS.css";

// app/components/header.jsx
init_react_router_dom();

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
init_react_router_dom();

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Navegacion = () => {
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "navegacion",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      }, void 0, false, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      }, void 0, false, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      }, void 0, false, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "Blog"
      }, void 0, false, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: carrito_default,
          alt: "carrito de compras"
        }, void 0, false, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
    className: "header",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "contenedor barra",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          to: "/",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "logo",
            src: logo_default,
            alt: "Imagen logo"
          }, void 0, false, {
            fileName: "app/components/header.jsx",
            lineNumber: 10,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 9,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navegacion_default, {}, void 0, false, {
          fileName: "app/components/header.jsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/components/header.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "footer",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "contenedor contenido",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navegacion_default, {}, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "copyright",
          children: [
            "Todos los derechos reservados ",
            new Date().getFullYear()
          ]
        }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 9,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLa - Remix",
    viewport: "width=device-width,initial-scale=1"
  };
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  var _a;
  const carritoLS = typeof window !== "undefined" ? (_a = JSON.parse(localStorage.getItem("carrito"))) != null ? _a : [] : null;
  const [carrito, setCarrito] = (0, import_react.useState)(carritoLS);
  (0, import_react.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };
  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };
  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
    setCarrito(carritoActualizado);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {
      context: {
        agregarCarrito,
        carrito,
        actualizarCantidad,
        eliminarGuitarra
      }
    }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 88,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 87,
    columnNumber: 9
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "es",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 105,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 108,
            columnNumber: 17
          }, this),
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 112,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 102,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  const error = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "error",
        children: [
          error.status,
          error.statusText
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
        className: "error-enlace",
        to: "/",
        children: "Talvez quieras volver a la pagina principal"
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 125,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 123,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "error",
        children: [
          error.status,
          error.statusText
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link2, {
        className: "error-enlace",
        to: "/",
        children: "Talvez quieras volver a la pagina principal"
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 132,
    columnNumber: 9
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-HAADNFJD.js.map
