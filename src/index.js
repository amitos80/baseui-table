
import React from "react";
//import ReactDOM from "react-dom";

import * as ReactDOMClient from 'react-dom/client';



//ReactDOMClient.hydrateRoot(/*...*/);

import {BaseProvider, LightTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Example from "./example.js";

const engine = new Styletron();

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement)
root.render(<StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
        <App />
    </BaseProvider>
</StyletronProvider>)

