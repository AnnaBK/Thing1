import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { setTextRange } from 'typescript';
import './App.css';
import Layout from './Layout';
import './Pages/NameField';
import NameField from './Pages/NameField';
import './Pages/TextField';
import TextField from './Pages/TextField';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NameField />} />
          <Route path="text" element={<TextField />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

function e(e: any) {
  throw new Error('Function not implemented.');
}

