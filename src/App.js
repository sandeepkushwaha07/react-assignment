

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Movie from './components/Movie';
import NavbarSection from './components/NavbarSection';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsItem from './components/NewsItem';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<NavbarSection />} />
          <Route path="/about" element={<Movie />} />
          <Route path="/News" element={<NewsItem/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
