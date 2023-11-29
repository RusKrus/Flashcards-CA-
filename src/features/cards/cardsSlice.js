import {createSlice} from "@reduxjs/toolkit";

export const cards = createSlice({
    name: "cards",
    initialState:{
        cards: {

        }
    },
    reducers: {
        addCard: (state, action)=>{
            state.cards[action.payload.id] = action.payload;
        }
    }
})

export const cardsSelector = (state) => state.cards.cards.find;
export const {addCard} = cards.actions;
export default cards.reducer;