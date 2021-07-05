import { createSlice } from "@reduxjs/toolkit"; 
import { addQuizId } from '../topics/topicsSlice';

export const createNewQuiz = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz(payload)); 
    dispatch(addQuizId(payload)); 
    // payload parameter is an object passed in to this method when called. It contains properties that both these two methods require. Object destructuring when defining each individual method allows me to pick and choose which properties i need for the logic of that specific function, so here the object as a whole is passed on. 
  }
}

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      // console.log('addQuiz reducer'); 
      const { id, name, topicId, cardIds } = action.payload; 

      state.quizzes[id] = {
        id: id,
        topicId: topicId,
        name: name, 
        cardIds: cardIds
      }
    }
  },
});

export const selectQuizzes = (state) => state.quizzes.quizzes; 

export const { addQuiz } = quizzesSlice.actions; 
export default quizzesSlice.reducer;