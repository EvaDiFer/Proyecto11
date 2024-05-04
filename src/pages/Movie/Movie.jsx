import { useParams } from 'react-router-dom';
import './Movie.css';

import { useEffect, useState } from 'react';
import { getImageUrl } from '../../utils/utils';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [showFullOverview, setShowFullOverview] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((res) => setMovie(res));
  }, []);

  return (
    <div>
      {movie ? (
        <div className='movie'>
          <h2>{movie.original_title}</h2>
          <div className='img_one'>
            <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
          </div>
          <div className='info'>
            {movie.genres && movie.genres.length > 0 && (
              <div>
                <p>
                  Genres: {movie.genres.map((genre) => genre.name).join(', ')}
                </p>
              </div>
            )}
            {movie.release_date && (
              <div>
                <p>Release Date: {movie.release_date}</p>
              </div>
            )}
            {movie.overview && (
              <div className='overview'>
                <p>
                  Overview:{' '}
                  {movie.overview.length > 50
                    ? showFullOverview
                      ? movie.overview
                      : movie.overview.slice(0, 50) + '...'
                    : movie.overview}
                  {movie.overview.length > 50 && (
                    <button
                      className='ver-mas-btn'
                      onClick={() => setShowFullOverview(!showFullOverview)}
                    >
                      {showFullOverview ? 'See Less' : 'See More'}
                    </button>
                  )}
                </p>
              </div>
            )}
            {movie.runtime && (
              <div>
                <p>Duration: {movie.runtime} minutes</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Movie;
