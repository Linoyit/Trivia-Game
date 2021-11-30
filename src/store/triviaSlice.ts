import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface question {
  id: string;
  question: string;
  answers: Array<string>
  answerIndex: number;
}

export interface TriviaState {
  items: Array<question>;
  userSelections: Array<number>;
}

export interface UserAnswer {
  questionId: number,
  optionIndex: number
}

const DATA_ENDPOINT = '/data.json';

export const fetchTriviaQuestions = createAsyncThunk(
  'trivia/fetchCollection',
  async () => {
    const response = await fetch(DATA_ENDPOINT);
    
    const dataAsJson = await response.json();
    return dataAsJson;
  }
);

const initialState: TriviaState = {
  items: [],
  userSelections: [-1, -1, -1, -1, -1],
};

export const triviaSlice = createSlice({
  name: "trivia",
  initialState,
  reducers: {

    setUserAnswer: (state, action: PayloadAction<UserAnswer>) => {
      const question = state.items.find((item) => item.id === '' + action.payload.questionId);
      if (question) {
        state.userSelections[action.payload.questionId] = action.payload.optionIndex;
      }
    },

    resetUserAnswers: (state) => {
      for(let i = 0; i < state.userSelections.length; i++){
        state.userSelections[i] = -1;
      }
    },

    calculateScore: (state) => {
      
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTriviaQuestions.fulfilled, (state, action:PayloadAction<question[]>) => {
        state.items = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const {
  setUserAnswer,
  resetUserAnswers,
  calculateScore,
} = triviaSlice.actions;

export default triviaSlice.reducer;


