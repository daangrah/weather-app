const SET_CITY = 'SET_CITY'
const initialState = {
  city:[]
};

export default function rootReducer(state = initialState, action){
  switch (action.type){
    case SET_CITY:
      return {...state, city: [...state, action.payload]}
    default:
      return state
  }
};