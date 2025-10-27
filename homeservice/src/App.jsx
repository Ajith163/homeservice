import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routeConfig } from './routes/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
