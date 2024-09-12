import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ejercicio.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App interMiami={11} bocaJuniors={11} lionelMessi={true} />
  </StrictMode>
);
