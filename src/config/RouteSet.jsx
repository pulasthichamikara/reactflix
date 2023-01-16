import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catelog from '../pages/Catelog';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

export default function RouteSet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/search:keyword" element={<Catelog />} />
    </Routes>
  );
}
