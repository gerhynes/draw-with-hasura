import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import "./index.css";
import App from "./App";
import connection from "./Connection";

ReactDOM.render(
  <ApolloProvider client={connection}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
