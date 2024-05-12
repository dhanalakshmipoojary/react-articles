import React from "react";
import { Provider } from "react-redux";
import RoutePage from "./router";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RoutePage />
    </Provider>
  );
}

export default App;
