import {
  __commonJS
} from "/build/_shared/chunk-4BT3XYWX.js";

// empty-module:~/models/post.server
var require_post = __commonJS({
  "empty-module:~/models/post.server"(exports, module) {
    module.exports = {};
  }
});

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export {
  require_post,
  formatearFecha
};
//# sourceMappingURL=/build/_shared/chunk-BCAZKRQG.js.map
