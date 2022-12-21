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
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-4BT3XYWX.js";

// app/routes/guitarras/index.jsx
var import_guitarras = __toESM(require_guitarras());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarLA - Nuestra coleccion de guitarras"
  };
}
function Tienda() {
  const guitarras = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListadoGuitarras, {
    guitarras
  }, void 0, false, {
    fileName: "app/routes/guitarras/index.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
var guitarras_default = Tienda;
export {
  guitarras_default as default,
  meta
};
//# sourceMappingURL=/build/routes/guitarras/index-JWH2HA3M.js.map
