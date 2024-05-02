import React, { useState, useEffect } from 'react';
import './Movies.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import apiKey from '../../utils/config';
import NavPages from '../../components/NavPages/NavPages';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const[limit, setLimit] = useState() valorar su uso, pero tiene muchísimas páginas y para este proyecto no creo que se rompa.  "total_pages": 43900,
  // "total_results": 877994
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        setLoading(false);
        // aquí podría introducir el setLimit (Math.floor(res.total_pages/res.total_results)+1)
      });
  }, [page]);

  return (
    <main id='movies'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      )}

      <NavPages page={page} setPage={setPage} />
    </main>
  );
};

export default Movies;
