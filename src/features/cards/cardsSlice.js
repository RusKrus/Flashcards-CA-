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

export const cardsSelector = (id)=>(state) => state.cards.cards[id];
export const {addCard} = cards.actions;
export default cards.reducer;