import React from 'react';
import {createRoot} from 'react-dom/client';
import './style.css';
import { InitialScreen } from './InitialScreen';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <React.StrictMode>
        <InitialScreen />
    </React.StrictMode>
)
