import { ADD_VALUE, MINUS_VALUE } from './actionTypes';

//action creator動作建立器

export const addValue = (value) => {
  return { type: ADD_VALUE, value };
};

export const addValueAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addValue(value));
    }, 2000);
  };
};

export const minusValue = (value) => {
  return { type: MINUS_VALUE, value };
};

// todos
// export const addTodo = (value) => {
//   return { type: ADD_TODO, value }
// }

// export const deleteTodo = (value) => {
//   return { type: MINUS_TODO, value }
// }
