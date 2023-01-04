export const SET_CITY = 'SET_CITY'
export const CLICK = 'CLICK'
export const UPLOAD_WEATHER = 'UPLOAD_WEATHER'
const initialState = {
  city:'',
  weather: {}
};

export default function rootReducer(state = initialState, action){
  switch (action.type){
    case CLICK:
      return {...state, city: [...state.city, action.payload]}
    case SET_CITY:
      return {...state, city: action.payload}
    case UPLOAD_WEATHER:
      return {...state, weather: {...state.weather, temperature: action.payload.temperature, wind: action.payload.wind}}
    default:
      return state
  }
};