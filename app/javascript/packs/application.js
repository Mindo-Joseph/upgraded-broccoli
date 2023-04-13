// Support component names relative to this directory:
import React from 'react';
import {
    createRoot
}
from 'react-dom/client';

import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root')
    const root = createRoot(rootElement)
    root.render(<App />)

})

var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
