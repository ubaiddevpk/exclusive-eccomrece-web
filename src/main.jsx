import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css"; // Only import CSS here
import { BrowserRouter } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext.jsx"; // Import AuthProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Wrap your App with AuthProvider */}
      <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
