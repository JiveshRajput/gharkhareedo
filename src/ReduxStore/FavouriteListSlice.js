import { createSlice } from '@reduxjs/toolkit'

const FavouriteListSlice = createSlice({
    name: "FavouriteList",
    initialState: {
        favPropertyList: []
    },
    reducers: {
        addToFavouriteProperty(state, actions) {
            state.favPropertyList.push(actions.payload)
        },
        removeFromFavouriteProperty(state, actions) {
            state.favPropertyList = state.favPropertyList.filter((obj)=> obj.id !== actions.payload);
        }

    }
});

export const { addToFavouriteProperty, removeFromFavouriteProperty } = FavouriteListSlice.actions;
export default FavouriteListSlice.reducer;