import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface question {
  id: string;
  question: string;
  answers: Array<string>
  answerIndex: number;
}

export interface TriviaState {
  items: Array<question>;
  userSelections: Array<number>;
  index: number;
  count: number;
}

const initialState: TriviaState = {
  items: [
    {
      id: "0",
      question: "Which animal can fly?",
      answers:["bird", "cat", "dog", "monkey"],
      answerIndex: 1,
    },
    {
      id: "1",
      question: "What is my favorite food?",
      answers:["Pizza", "Ice-Cream", "Toast", "Sushi"],
      answerIndex: 2,
    },
    {
      id: "2",
      question: "What is my name?",
      answers:["Orel", "May", "Rina", "Linoy"],
      answerIndex: 4,
    },
    {
      id: "3",
      question: "What is my favorite color?",
      answers:["blue", "red", "green", "yellow"],
      answerIndex: 3,
    },
    {
      id: "4",
      question: "What is my favorite country?",
      answers:["Israel", "Israel", "Paris", "Portugal"],
      answerIndex: 1,
    },
  ],
  userSelections: [-1, -1, -1, -1, -1],
  index: 0,
  count: 0,
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },

    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },

    setUserAnswer: (state, action: PayloadAction<string>) => {
      const question = state.items.find((item) => item.id === "" + state.index);
      if (question) {
        state.userSelections[state.index] = parseInt(action.payload);
      }
    },

    resetUserAnswers: (state) => {
      for(let i = 0; i < state.userSelections.length; i++){
        state.userSelections[i] = -1;
      }
      state.count = 0;
    },

    calculateScore: (state) => {
      let i = 0;
      state.items.forEach((item) => {
        if (state.userSelections[i++] === item.answerIndex) {
          state.count += 1;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCount,
  setIndex,
  setUserAnswer,
  resetUserAnswers,
  calculateScore,
} = triviaSlice.actions;

export default triviaSlice.reducer;
