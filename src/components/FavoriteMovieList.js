import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { REMOVE_FAVORITE, removeFavorite } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
  const favorites = useSelector(store => store.favoriteReducer.favorites);
  const displayFavorites = useSelector((store) => store.favoriteReducer.displayfavorites); 
  const dispatch = useDispatch();

  const rFavorite = (id) => { 
    dispatch(removeFavorite(id)); 
  }


  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md" style={{display: displayFavorites ? "flex-1": "none"}}>
      <h5 className='font-bold'>Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {
          favorites.map(movie => (
            <Link key={movie.id} className="py-1 flex gap-2 justify-between" to={`/movies/${movie.id}`}>
              {movie.title}
              <span className="material-icons hover:text-red-600 text-[18px]" onClick={() => rFavorite(Number(movie.id))}>remove_circle</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
}


export default FavoriteMovieList;