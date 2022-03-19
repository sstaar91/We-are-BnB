import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Test } from 'pages';
import { Main } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
