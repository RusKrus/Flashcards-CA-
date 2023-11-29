import {createSlice} from "@reduxjs/toolkit";


export const topics = createSlice({
    name: `topics`,
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action)=>{
            action.payload.quizIds = [];
            state.topics[action.payload.id] = action.payload;
            
        },
        addQuizId: (state, action) =>{
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
})

export const topicsSelector = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topics.actions;
export default topics.reducer;