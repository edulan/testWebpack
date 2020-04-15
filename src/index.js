import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage } from "react-intl";

function App() {
  return (
    <p>
      <FormattedMessage id="welcome" defaultMessage="Hello World!" />
    </p>
  );
}

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById("container")
);
