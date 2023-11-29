import {createSlice} from "@reduxjs/toolkit";

export const quizzes = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})


export const quizzesSelector = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzes.actions;
export default quizzes.reducer;