import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      // console.log('addTopic reducer');
      
      // ES6 object destructuring 
      const { id, name, icon } = action.payload;
      state.topics[id] = {  // create new topic object, the new object is assigned to the value of it's unique id which was passed in. Properties below
        id,
        name,
        icon,
        quizIds: []
      }
    }, 
    addQuizId: (state, action) => {     
      // console.log('addQuizId reducer'); 
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id); // this accesses the topic who's id is the same as the [topicId], then accessess the quizIds array of that topic and adds the id to the array. 
    }
  }
}); 

// selectors
export const selectAllTopics = (state) => state.topics.topics; 

// actions + reducers
export const { addTopic, addQuizId } = topicsSlice.actions; 
export default topicsSlice.reducer;