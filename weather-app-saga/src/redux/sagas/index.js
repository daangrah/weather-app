import { takeEvery, call, all } from 'redux-saga/effects'

const API_key = '2e19406cc850004ee8896c266ef62484';

const fetchWeather = (lat, lon) => {fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`).then(r => r.json())}
const fetchPlace = (city_name) => {fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`).then(r => r.json())}

export function* workerGetPlace() {
  const city_name = prompt('Enter your city');
  const data = yield call(fetchPlace(city_name));
  console.log(data)
  const lat = data[0].lat;
  const lon = data[0].lon;
  const weather = yield call(fetchWeather(lat, lon));
  console.log(weather)
}

export function* watcherClickSaga () {
  yield takeEvery('CLICK', workerGetPlace)
}

export default function* rootSaga() {
  yield all([watcherClickSaga()])
}