import { takeEvery, call } from 'redux-saga/effects'

const API_key = '2e19406cc850004ee8896c266ef62484';

const fetchWeather = (lat, lon) => {fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`).then(r => r)}
const fetchPlace = (city_name) => {fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`)}

export function* workerGetPlace() {
  const city_name = prompt('Enter your city');
  const data = yield call(fetchPlace(city_name));
  const json = yield call(()=> new Promise(res => res(data.json())))
  const lat = json[0].lat;
  const lon = json[0].lon;
  console.log(json)
  yield getWeatherWorker(lat, lon);
}

export function* getWeatherWorker(lat, lon){
  const weather = yield call(fetchWeather(lat, lon));
  const json = yield call(()=> new Promise(res => res(weather.json())))
  console.log(json)
}

export function* watcherClickSaga () {
  yield takeEvery('CLICK', workerGetPlace)
}

export default function* rootSaga() {
  yield watcherClickSaga();
}