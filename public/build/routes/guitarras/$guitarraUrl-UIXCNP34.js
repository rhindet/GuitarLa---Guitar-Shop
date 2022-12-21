import {
  require_guitarras
} from "/build/_shared/chunk-AM7WKS3L.js";
import {
  init_esm,
  useLoaderData,
  useOutletContext
} from "/build/_shared/chunk-LJFRNTY5.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/guitarras/$guitarraUrl.jsx
var import_guitarras = __toESM(require_guitarras());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitarra No Encontrada",
      descripcion: "Guitarras , venta de guitarras , guitarra No Encontrada"
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras , venta de guitarras , guitarra ${data.data[0].attributes.nombre}`
  };
}
function Guitarra() {
  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = (0, import_react2.useState)(0);
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Debes seleccionar una cantidad");
      return;
    }
    const guitarraSeleccionada = {
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
      }, void 0, false, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "contenido",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            children: nombre
          }, void 0, false, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "texto",
            children: descripcion
          }, void 0, false, {
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
          }, void 0, true, {
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
              }, void 0, false, {
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
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 78,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "1",
                    children: "1"
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 79,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "2",
                    children: "2"
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 80,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "3",
                    children: "3"
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 81,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "4",
                    children: "4"
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 82,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
                    value: "5",
                    children: "5"
                  }, void 0, false, {
                    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                    lineNumber: 83,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 74,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "submit",
                value: "Agregar al carrito"
              }, void 0, false, {
                fileName: "app/routes/guitarras/$guitarraUrl.jsx",
                lineNumber: 86,
                columnNumber: 21
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/guitarras/$guitarraUrl.jsx",
            lineNumber: 72,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/guitarras/$guitarraUrl.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/guitarras/$guitarraUrl.jsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}
var guitarraUrl_default = Guitarra;
export {
  guitarraUrl_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras/$guitarraUrl-UIXCNP34.js.map
