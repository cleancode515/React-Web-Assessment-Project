import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store.ts";
import { TranslationProvider } from "./contexts/TranslationContext";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </PersistGate>
  </Provider>
);
