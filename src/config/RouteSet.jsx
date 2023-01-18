import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catelog from '../pages/catelog/Catelog';
import Detail from '../pages/detail/Detail';
import Home from '../pages/Home';

export default function RouteSet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catelog />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/:category/search:keyword" element={<Detail />} />
    </Routes>
  );
}
