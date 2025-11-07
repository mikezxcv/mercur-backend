import App from "@medusajs/dashboard";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import plugin0 from "@medusajs/draft-order/admin"
import plugin1 from "@mercurjs/b2c-core/admin"
import plugin2 from "@mercurjs/commission/admin"
import plugin3 from "@mercurjs/algolia/admin"
import plugin4 from "@mercurjs/reviews/admin"
import plugin5 from "@mercurjs/requests/admin"

let root = null

if (!root) {
  root = ReactDOM.createRoot(document.getElementById("medusa"))
}


root.render(
  <React.StrictMode>
    <App plugins={[plugin0, plugin1, plugin2, plugin3, plugin4, plugin5]} />
  </React.StrictMode>
)


if (import.meta.hot) {
    import.meta.hot.accept()
}