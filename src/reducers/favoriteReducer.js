import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

export const initialState = {
    favorites: [],
    displayfavorites: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayfavorites: state.displayfavorites ? false: true
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;