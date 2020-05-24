import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <ApolloProvider client={connection}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
