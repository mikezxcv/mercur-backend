// api/index.js
const medusaApp = require("../.medusa/server");

module.exports = async (req, res) => {
  try {
    // Si tu build expone una función express-like (app(req,res))
    if (typeof medusaApp === "function") {
      return medusaApp(req, res);
    }

    // Si requiere iniciar manualmente
    if (medusaApp.default && typeof medusaApp.default === "function") {
      return medusaApp.default(req, res);
    }

    res.status(500).send("Medusa app no se pudo inicializar correctamente.");
  } catch (err) {
    console.error("Error ejecutando backend Medusa:", err);
    res.status(500).send("Error interno en backend Medusa");
  }
};
