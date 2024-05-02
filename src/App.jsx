import React from 'react';
import './App.css';
import Background from './components/Background/Background';
import { Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie/Movie';
import Movies from './pages/Movies/Movies';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Background />
      <Header />
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movies/:id' element={<Movie />} />
      </Routes>
    </div>
  );
};

export default App;
