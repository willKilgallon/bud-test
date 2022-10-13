import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {GlobalStyles} from "./theme";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <HelmetProvider>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet" />
            </Helmet>
            <GlobalStyles />
            <App />
        </HelmetProvider>
    </StrictMode>
);