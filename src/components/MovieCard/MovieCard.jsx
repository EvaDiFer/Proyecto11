import './MovieCard.css';
import { getImageUrl } from '../../utils/utils';

const MovieCard = ({ movie }) => {
  return (
    <div className='movie-card' key={movie.id}>
      <div className='hover_overlay'>
        <h2>{movie.title}</h2>
        <p className='for-more'>Discover more</p>
      </div>
      <div className='img_wrp'>
        <img src={getImageUrl(movie.backdrop_path)} alt={movie.title} />
      </div>
    </div>
  );
};

export default MovieCard;
