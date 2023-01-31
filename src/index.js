import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { ThemeProvider } from 'styled-components';
const root = ReactDOM.createRoot(document.getElementById('root'));
const dark = {
    txC:"white",
    bgC:"black"
}
const light = {
    txC:"black",
    bgC:"white"
}
root.render(
    <ThemeProvider theme={dark}>
        <App />
    </ThemeProvider>
);