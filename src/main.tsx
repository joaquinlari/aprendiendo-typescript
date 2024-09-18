import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./ejercicies/ejercicio.tsx";
import { TodoApp } from "./components/TodoApp";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App interMiami={11} bocaJuniors={11} lionelMessi={true} /> */}
    <TodoApp />
  </StrictMode>
);
