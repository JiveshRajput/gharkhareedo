import { configureStore } from '@reduxjs/toolkit';
import NavToggleReducer from './NavToggleSlice';
import PropertyListReducer from './PropertyListSlice';
import FavouriteListReducer from './FavouriteListSlice';

const ReduxStore = configureStore({
    reducer: {
        NavToggle : NavToggleReducer,
        PropertyList : PropertyListReducer,
        FavouriteList : FavouriteListReducer
    }
});

export default ReduxStore;