import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface question {
  id: string;
  question: string;
  answers: Array<string>
  answerIndex: string;
  userAnswer: string;
}

export interface TriviaState {
  items: Array<question>;
  userSelection: Array<number>;
  index: number;
  count: number;
}

const initialState: TriviaState = {
  items: [
    {
      id: "0",
      question: "Which animal can fly?",
      answers:["bird", "cat", "dog", "monkey"],
      answerIndex: "1",
      userAnswer: "-1",
    },
    {
      id: "1",
      question: "What is my favorite food?",
      answers:["Pizza", "Ice-Cream", "Toast", "Sushi"],
      answerIndex: "2",
      userAnswer: "-1",
    },
    {
      id: "2",
      question: "What is my name?",
      answers:["Orel", "May", "Rina", "Linoy"],
      answerIndex: "4",
      userAnswer: "-1",
    },
    {
      id: "3",
      question: "What is my favorite color?",
      answers:["blue", "red", "green", "yellow"],
      answerIndex: "3",
      userAnswer: "-1",
    },
    {
      id: "4",
      question: "What is my favorite country?",
      answers:["Israel", "Israel", "Paris", "Portugal"],
      answerIndex: "1",
      userAnswer: "-1",
    },
  ],
  userSelection: [],
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
        question.userAnswer = action.payload;
      }
    },

    resetUserAnswers: (state) => {
      state.items.forEach((question) => {
        question.userAnswer = "-1";
      });
      state.count = 0;
    },

    calculateScore: (state) => {
      state.items.forEach((item) => {
        if (item.userAnswer === item.answerIndex) state.count += 1;
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
