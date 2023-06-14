import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persister } from "./App/store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <Toaster position="top-right" reverseOrder={false} />
      </PersistGate>
      <App />
    </Provider>
  </React.StrictMode>
);
