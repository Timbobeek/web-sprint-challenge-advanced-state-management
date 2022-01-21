import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_ERROR_VALUE} from '../actions';

// import (smurfs from '../mocks/handlers' 


export const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
};

const reducer = (state= initialState, action)=>{
  switch(action.type){
    case FETCH_START:
      return{
        ...state,
        smurfs: [],
        isLoading: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      };
    case FETCH_FAIL:
      return{
        ...state,
        smurfs: [],
        isLoading: false,
        error: action.payload
      };
    case ADD_SMURF:
      const newSmurf = {
        ...action.payload,
        id: Math.random()
      };
      return{
        ...state,
        smurfs: [...state.smurfs, newSmurf]
      };
    case ADD_ERROR_VALUE:
      return{
        ...state,
        error:[...state.error, action.payload]
      }
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//done//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//done//2. Add in the arguments needed to complete a standard reducer function.
//done//3. Add in a reducer case to accommodate the start of a smurf fetch.
//done//4. Add in a reducer case to accommodate the successful smurf api fetch.
//done//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//done//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//done//7. Add in a reducer case that adds in a value to the error message.