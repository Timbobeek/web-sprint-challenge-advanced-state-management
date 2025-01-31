import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR_VALUE = 'ADD_ERROR_VALUE';

export const fetchSmurfs = () => {
  return (dispatch) => {
    console.log('fetchSmurfs')
    dispatch({type:FETCH_START});
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({type:FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({type:FETCH_FAIL, payload: err});
      })
  }
}

export const addSmurf = (name, nickname, position, description) => {
  axios.post('http://localhost:3333/smurfs', {name, nickname, position, description});
  return({type:ADD_SMURF, payload:{name, nickname, position, description}});
}

export const addErrorValue = (error) => {
  console.log('addErrorValue')
  return({type:ADD_ERROR_VALUE, payload:error});
}

//Task List:
//done//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//done//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//done//3. Add a standard action that allows us to set the value of the error message slice of state.