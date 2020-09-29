import React from "react";
import ReactDOM from "react-dom";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ptBrLocale from "date-fns/locale/pt-BR";

import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBrLocale}>
    <CssBaseline />
    <App />
  </MuiPickersUtilsProvider>,
  rootElement
);
