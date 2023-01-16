import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RouteSet from './config/RouteSet';
import Footer from './footer/Footer';
import Header from './herader/Header';
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteSet />
      <Footer />
    </BrowserRouter>
  );
}
