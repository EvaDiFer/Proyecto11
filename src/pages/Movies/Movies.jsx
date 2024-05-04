import React, { useState, useEffect } from 'react';
import './Movies.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import NavPages from '../../components/NavPages/NavPages';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(import.meta.env.VITE_API_KEY); // Aquí se imprime la API key en la consola
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            import.meta.env.VITE_API_KEY
          }&page=${page}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
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
