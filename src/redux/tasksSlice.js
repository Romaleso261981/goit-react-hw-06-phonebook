import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
    { id: nanoid(), name: 'коля мельніков', number: '097 742 4367' },
    { id: nanoid(), name: 'коля подсобнік', number: '068 823 9986' },
    { id: nanoid(), name: 'леся', number: '645-17-79' },
    { id: nanoid(), name: 'Сергій Галепа', number: '067 379 3654' },
  ];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
