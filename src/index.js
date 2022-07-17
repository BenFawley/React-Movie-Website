import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MovieContextProvider } from './Context/movie-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MovieContextProvider>
        <App />
    </MovieContextProvider>
);


