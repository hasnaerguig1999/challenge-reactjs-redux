export const ADD_NAME = 'ADD_NAME';

export function addName(name) {
  return {
    type: ADD_NAME,
    payload: { name },
  };
}

function namesReducer(state = [], action) {
  switch (action.type) {
    case ADD_NAME:
      return [...state, action.payload.name];
    default:
      return state;
  }
}

export default namesReducer;