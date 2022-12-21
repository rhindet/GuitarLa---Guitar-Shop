var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), { PassThrough } = require("stream"), { Response: Response2 } = require("@remix-run/node"), { RemixServer } = require("@remix-run/react"), isbot = require("isbot"), { renderToPipeableStream } = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response2(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response2(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react = require("react"), import_react2 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-EBLBSMZS.css";

// app/components/header.jsx
var import_react_router_dom2 = require("react-router-dom");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react_router_dom = require("react-router-dom");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Navegacion = () => {
  let location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "navegacion",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      }, void 0, !1, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      }, void 0, !1, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      }, void 0, !1, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
        to: "/blog",
        className: location.pathname === "/blog" ? "active" : "",
        children: "Blog"
      }, void 0, !1, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom.Link, {
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: carrito_default,
          alt: "carrito de compras"
        }, void 0, !1, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}, navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
  className: "header",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "contenedor barra",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_router_dom2.Link, {
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          className: "logo",
          src: logo_default,
          alt: "Imagen logo"
        }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 10,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navegacion_default, {}, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)
}, void 0, !1, {
  fileName: "app/components/header.jsx",
  lineNumber: 7,
  columnNumber: 5
}, this), header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
  className: "footer",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "contenedor contenido",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navegacion_default, {}, void 0, !1, {
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
      }, void 0, !0, {
        fileName: "app/components/footer.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/footer.jsx",
  lineNumber: 6,
  columnNumber: 5
}, this), footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react.useState)(carritoLS);
  return (0, import_react.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarGuitarra: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 88,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 105,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 103,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 108,
            columnNumber: 17
          }, this),
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 110,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 111,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 112,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 102,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        className: "error",
        children: [
          error.status,
          error.statusText
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "error-enlace",
        to: "/",
        children: "Talvez quieras volver a la pagina principal"
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 125,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
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
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "error-enlace",
        to: "/",
        children: "Talvez quieras volver a la pagina principal"
      }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 134,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 132,
    columnNumber: 9
  }, this);
}

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-GPOGF46K.css";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links2() {
  return [{
    rel: "stylesheet",
    href: guitarras_default
  }];
}
function Tienda() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "contenedor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {
      context: (0, import_react3.useOutletContext)()
    }, void 0, !1, {
      fileName: "app/routes/guitarras.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda;

// app/routes/guitarras/$guitarraUrl.jsx
var guitarraUrl_exports = {};
__export(guitarraUrl_exports, {
  default: () => guitarraUrl_default,
  loader: () => loader,
  meta: () => meta2
});

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/guitarras/$guitarraUrl.jsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: " Guitarra No Encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  return data ? {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras , venta de guitarras , guitarra ${data.data[0].attributes.nombre}`
  } : {
    title: "GuitarLA - Guitarra No Encontrada",
    descripcion: "Guitarras , venta de guitarras , guitarra No Encontrada"
  };
}
function Guitarra() {
  let { agregarCarrito } = (0, import_react4.useOutletContext)(), [cantidad, setCantidad] = (0, import_react5.useState)(0), guitarra = (0, import_react4.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: " guitarra",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        className: "imagen",
        src: imagen.data.attributes.url,
        alt: `Imagen de la guitarra ${nombre}`
      }, void 0, !1, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: nombre
          }, void 0, !1, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "texto",
            children: descripcion
          }, void 0, !1, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "precio",
            children: [
              "$",
              precio
            ]
          }, void 0, !0, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 70,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            onSubmit: handleSubmit,
            className: "formulario",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "cantidad",
                children: "Cantidad"
              }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 73,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
                onChange: (e) => setCantidad(parseInt(e.target.value)),
                id: "cantidad",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "0",
                    children: "-- Seleccione --"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 78,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "1",
                    children: "1"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 79,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "2",
                    children: "2"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 80,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "3",
                    children: "3"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 81,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "4",
                    children: "4"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 82,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "5",
                    children: "5"
                  }, void 0, !1, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 83,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 74,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "submit",
                value: "Agregar al carrito"
              }, void 0, !1, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 86,
                columnNumber: 21
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 72,
            columnNumber: 17
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}
var guitarraUrl_default = Guitarra;

// app/routes/guitarras/index.jsx
var guitarras_exports2 = {};
__export(guitarras_exports2, {
  default: () => guitarras_default3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react7 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { descripcion, imagen, precio, url, nombre } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "guitarra",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imagen.data.attributes.formats.medium.url,
        alt: `Imagen guitarra ${nombre}`
      }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: nombre
          }, void 0, !1, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "descripcion",
            children: descripcion
          }, void 0, !1, {
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
          }, void 0, !0, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
            className: "enlace",
            to: `/guitarras/${url}`,
            children: "Ver Producto"
          }, void 0, !1, {
            fileName: "app/components/guitarra.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "heading",
        children: "Nuestra Coleccion"
      }, void 0, !1, {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 6,
        columnNumber: 13
      }, this),
      (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "guitarras-grid",
        children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Guitarra2, {
          guitarra: guitarra == null ? void 0 : guitarra.attributes
        }, guitarra == null ? void 0 : guitarra.id, !1, {
          fileName: "app/components/listado-guitarras.jsx",
          lineNumber: 12,
          columnNumber: 29
        }, this))
      }, void 0, !1, {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/guitarras/index.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function meta3() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccion de guitarras"
  };
}
async function loader2() {
  return (await getGuitarras()).data;
}
function Tienda2() {
  let guitarras = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoGuitarras, {
    guitarras
  }, void 0, !1, {
    fileName: "app/routes/guitarras/index.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
var guitarras_default3 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta4
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-NEKAOWKX.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function meta4() {
  return {
    title: "GuitarLa - Sobre Nosotros",
    descripcion: "Venta de guitarras, blog de musica"
  };
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "contenedor nosotros",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "heading",
        children: "Nosotros"
      }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: nosotros_default,
            alt: "imagen sobre nosotros"
          }, void 0, !1, {
            fileName: "app/routes/nosotros.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorem minus blanditiis ullam accusamus vero, deleniti distinctio repellat id animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure voluptates neque commodi blanditiis est modi labore optio, dolorum unde."
              }, void 0, !1, {
                fileName: "app/routes/nosotros.jsx",
                lineNumber: 33,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis dolorem minus blanditiis ullam accusamus vero, deleniti distinctio repellat id animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iure voluptates neque commodi blanditiis est modi labore optio, dolorum unde."
              }, void 0, !1, {
                fileName: "app/routes/nosotros.jsx",
                lineNumber: 34,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/nosotros.jsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default3,
  links: () => links4,
  meta: () => meta5
});

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-PFXMP325.css";

// app/routes/carrito.jsx
var import_react8 = require("react"), import_react9 = require("@remix-run/react"), import_remix_utils = require("remix-utils"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta5() {
  return {
    title: "GuitarLA - Carrito de Compras",
    description: "Venta de guitarras, musica ,blog , carrito de compras , tienda"
  };
}
function Carrito() {
  let [total, setTotal] = (0, import_react8.useState)(0), { carrito, actualizarCantidad, eliminarGuitarra } = (0, import_react9.useOutletContext)();
  return (0, import_react8.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_utils.ClientOnly, {
    fallback: "cargando...",
    children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
      className: "contenedor",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "heading",
          children: "Carrito de Compras"
        }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 34,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "contenido",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "carrito",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  children: "Articulos"
                }, void 0, !1, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 37,
                  columnNumber: 29
                }, this),
                (carrito == null ? void 0 : carrito.lenght) === 0 ? "Carrito Vacio" : carrito == null ? void 0 : carrito.map((producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "producto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: producto.imagen,
                        alt: `Imagen del producto ${producto.nombre}`
                      }, void 0, !1, {
                        fileName: "app/routes/carrito.jsx",
                        lineNumber: 42,
                        columnNumber: 45
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 41,
                      columnNumber: 41
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "nombre",
                          children: producto.nombre
                        }, void 0, !1, {
                          fileName: "app/routes/carrito.jsx",
                          lineNumber: 45,
                          columnNumber: 45
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: "Cantidad : "
                        }, void 0, !1, {
                          fileName: "app/routes/carrito.jsx",
                          lineNumber: 46,
                          columnNumber: 45
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
                          className: "select",
                          value: producto.cantidad,
                          onChange: (e) => actualizarCantidad({
                            cantidad: parseInt(e.target.value),
                            id: producto.id
                          }),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "1",
                              children: "1"
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 55,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "2",
                              children: "2"
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 56,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "3",
                              children: "3"
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 57,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "4",
                              children: "4"
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 58,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                              value: "5",
                              children: "5"
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 59,
                              columnNumber: 49
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/carrito.jsx",
                          lineNumber: 47,
                          columnNumber: 45
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "precio",
                          children: [
                            "$ ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              children: producto.precio
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 61,
                              columnNumber: 69
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/carrito.jsx",
                          lineNumber: 61,
                          columnNumber: 45
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "subtotal",
                          children: [
                            "Subtotal: $ ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              children: producto.precio * producto.cantidad
                            }, void 0, !1, {
                              fileName: "app/routes/carrito.jsx",
                              lineNumber: 63,
                              columnNumber: 81
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/carrito.jsx",
                          lineNumber: 63,
                          columnNumber: 45
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 44,
                      columnNumber: 41
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      type: "button",
                      className: "btn_eliminar",
                      onClick: () => eliminarGuitarra(producto.id),
                      children: "X"
                    }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 65,
                      columnNumber: 41
                    }, this)
                  ]
                }, producto.id, !0, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 40,
                  columnNumber: 37
                }, this))
              ]
            }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 36,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
              className: "resumen",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  children: "Resumen del Pedido"
                }, void 0, !1, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 75,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  children: [
                    "Total a pagar: $",
                    total
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 76,
                  columnNumber: 29
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 74,
              columnNumber: 25
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 35,
          columnNumber: 21
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 33,
      columnNumber: 17
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this);
}
var carrito_default3 = Carrito;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta6
});
var import_react11 = require("@remix-run/react");

// app/models/post.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/models/curso.server.js
async function getCurso() {
  return await (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/components/post.jsx
var import_react10 = require("@remix-run/react");

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/components/post.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Post({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    className: "post",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: imagen.data.attributes.formats.small.url,
        alt: `imagen blog ${titulo}`,
        className: "imagen"
      }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: titulo
          }, void 0, !1, {
            fileName: "app/components/post.jsx",
            lineNumber: 15,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "fecha",
            children: formatearFecha(publishedAt)
          }, void 0, !1, {
            fileName: "app/components/post.jsx",
            lineNumber: 16,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "resumen",
            children: contenido
          }, void 0, !1, {
            fileName: "app/components/post.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
            className: "enlace",
            to: `/blog/${url}`,
            children: "Leer Post"
          }, void 0, !1, {
            fileName: "app/components/post.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 11,
    columnNumber: 4
  }, this);
}

// app/components/listado-post.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: "heading",
        children: "Blog"
      }, void 0, !1, {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 6,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "blog",
        children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Post, {
          post: post.attributes
        }, post.id, !1, {
          fileName: "app/components/listado-post.jsx",
          lineNumber: 9,
          columnNumber: 21
        }, this))
      }, void 0, !1, {
        fileName: "app/components/listado-post.jsx",
        lineNumber: 7,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/listado-post.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/curso.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  let { contenido, imagen, titulo } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
    className: "curso",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", {
        jsx: "true",
        children: `
            .curso{
                background-image:linear-gradient(to right,rgb(0 0 0 / .65),rgb(0 0 0 / .7)),url(${imagen.data.attributes.url})}
            `
      }, void 0, !1, {
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
            }, void 0, !1, {
              fileName: "app/components/curso.jsx",
              lineNumber: 17,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "texto",
              children: contenido
            }, void 0, !1, {
              fileName: "app/components/curso.jsx",
              lineNumber: 18,
              columnNumber: 21
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/curso.jsx",
          lineNumber: 16,
          columnNumber: 17
        }, this)
      }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

// app/styles/blog.css
var blog_default = "/build/_assets/blog-TOBHNBDC.css";

// app/styles/curso.css
var curso_default = "/build/_assets/curso-46NNXVWH.css";

// app/routes/index.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function meta6() {
}
function links5() {
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
async function loader3() {
  let [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
        className: "contenedor",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoGuitarras, {
          guitarras
        }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 60,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Curso, {
        curso: curso.attributes
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 65,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
        className: "contenedor",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoPosts, {
          posts
        }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 70,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var routes_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links6
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links6() {
  return [{
    rel: "stylesheet",
    href: blog_default
  }];
}
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    className: "contenedor",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// app/routes/blog/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => Post2,
  loader: () => loader4,
  meta: () => meta7
});
var import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function meta7({ data }) {
  return data ? {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripcion: `Guitarras , venta de guitarras , entrada ${data.data[0].attributes.titulo}`
  } : {
    title: "GuitarLA - Entrada No Encontrada",
    descripcion: "Guitarras , venta de guitarras , Entrada No Encontrada"
  };
}
async function loader4({ params }) {
  let { postUrl } = params, post = await getPost(postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: " Entrada no encontrada"
    });
  return post;
}
function Post2() {
  var _a, _b, _c;
  let post = (0, import_react13.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = (_a = post == null ? void 0 : post.data[0]) == null ? void 0 : _a.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
    className: " post mt-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: (_c = (_b = imagen == null ? void 0 : imagen.data) == null ? void 0 : _b.attributes) == null ? void 0 : _c.url,
        alt: `imagen blog ${titulo}`,
        className: "imagen"
      }, void 0, !1, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: titulo
          }, void 0, !1, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "fecha",
            children: formatearFecha(publishedAt)
          }, void 0, !1, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "texto",
            children: contenido
          }, void 0, !1, {
            fileName: "app/routes/blog/$postUrl.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/blog/$postUrl.jsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/blog/$postUrl.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/blog/index.jsx
var blog_exports2 = {};
__export(blog_exports2, {
  default: () => blog_default3,
  loader: () => loader5,
  meta: () => meta8
});
var import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function meta8() {
  return {
    title: "GuitarLA - Nuestro Blog",
    descripcion: "GuitarLA, Blog de musica y venta de guitarras"
  };
}
async function loader5() {
  return (await getPosts()).data;
}
function Blog2() {
  let posts = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoPosts, {
    posts
  }, void 0, !1, {
    fileName: "app/routes/blog/index.jsx",
    lineNumber: 23,
    columnNumber: 9
  }, this);
}
var blog_default3 = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "08954fae", entry: { module: "/build/entry.client-W5EZJIKL.js", imports: ["/build/_shared/chunk-LJFRNTY5.js", "/build/_shared/chunk-4BT3XYWX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HAADNFJD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-MEXGZC5S.js", imports: ["/build/_shared/chunk-5LQDZUB7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$postUrl": { id: "routes/blog/$postUrl", parentId: "routes/blog", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$postUrl-77VDVZO7.js", imports: ["/build/_shared/chunk-BCAZKRQG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/index": { id: "routes/blog/index", parentId: "routes/blog", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-4C5YIVMT.js", imports: ["/build/_shared/chunk-EQFXTU6K.js", "/build/_shared/chunk-BCAZKRQG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-UG5H7ZNE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-STXO2R7I.js", imports: ["/build/_shared/chunk-ZF5RFZ34.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/$guitarraUrl": { id: "routes/guitarras/$guitarraUrl", parentId: "routes/guitarras", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras/$guitarraUrl-UIXCNP34.js", imports: ["/build/_shared/chunk-AM7WKS3L.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/index": { id: "routes/guitarras/index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras/index-JWH2HA3M.js", imports: ["/build/_shared/chunk-ICKQSSPB.js", "/build/_shared/chunk-AM7WKS3L.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VJOZYG2R.js", imports: ["/build/_shared/chunk-5LQDZUB7.js", "/build/_shared/chunk-EQFXTU6K.js", "/build/_shared/chunk-BCAZKRQG.js", "/build/_shared/chunk-ZF5RFZ34.js", "/build/_shared/chunk-ICKQSSPB.js", "/build/_shared/chunk-AM7WKS3L.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-HWKVD3Z6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-08954FAE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/guitarras/$guitarraUrl": {
    id: "routes/guitarras/$guitarraUrl",
    parentId: "routes/guitarras",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarraUrl_exports
  },
  "routes/guitarras/index": {
    id: "routes/guitarras/index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_exports2
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/blog/$postUrl": {
    id: "routes/blog/$postUrl",
    parentId: "routes/blog",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "routes/blog",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: blog_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
