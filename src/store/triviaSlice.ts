import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { iteratorSymbol } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import { count } from 'console';
import { isTemplateSpan } from 'typescript';

interface question {
  id: string,
  question: string,
  first: string,
  second: string,
  third: string,
  forth: string,
  answerIndex: string
  userAnswer: string
}

export interface TriviaState {
  items: Array<question>
  index: number
  count: number
}

const initialState: TriviaState = {
  items: [
    {id:'0', question:'Which animal can fly?', first:'bird', second:'cat', 
        third:'dog', forth:'monkey', answerIndex:'1', userAnswer: '-1'},
    {id:'1', question:'What is my favorite food?', first:'Pizza', second:'Ice-Cream', 
        third:'Toast', forth:'Sushi', answerIndex:'2', userAnswer: '-1'},
    {id:'2', question:'What is my name?', first:'Orel', second:'May', 
        third:'Rina', forth:'Linoy', answerIndex:'4', userAnswer: '-1'},
    {id:'3', question:'What is my favorite color?', first:'blue', second:'red', 
        third:'green', forth:'yellow', answerIndex:'3', userAnswer: '-1'},
    {id:'4', question:'What is my favorite country?', first:'Israel', second:'Spain', 
        third:'Paris', forth:'Portugal', answerIndex:'1', userAnswer: '-1'}
  ], 
  index: 0,
  count: 0,
}

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState,
  reducers: {

  setCount: (state, action: PayloadAction<number>) => {
    state.count = action.payload;
  },

  setIndex: (state, action: PayloadAction<number>) => {
    state.index = action.payload;
  },

  setUserAnswer: (state, action: PayloadAction<string>) => {
    const question = state.items.find(item => item.id === '' + state.index);
    if (question) {
      question.userAnswer = action.payload;
    }
  },

  resetUserAnswers: (state) => {
    state.items.forEach(question => {
      question.userAnswer = '-1';
    });
    state.count = 0;
  },

  calculateScore: (state) => {
    state.items.forEach(item => {
      if (item.userAnswer === item.answerIndex) state.count += 1;
    })
  },

}
})

// Action creators are generated for each case reducer function
export const {setCount, setIndex, setUserAnswer, resetUserAnswers, calculateScore} = triviaSlice.actions

export default triviaSlice.reducer