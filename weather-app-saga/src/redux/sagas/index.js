import { takeEvery } from 'redux-saga/effects'

const API_key = '2e19406cc850004ee8896c266ef62484';
const city_name = prompt('Enter your city');
async function getPlace(){
  const request = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&appid=${API_key}`)
  const data = await request.json()
  console.log(data)
  const lat = data[0].lat;
  const lon = data[0].lon;
  getWeather(lat, lon)
}
async function getWeather(lat, lon){
  const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
  const data = await request.json()
  console.log(data)
  return data;
}

export function* workerSaga() {
  const data = yield getPlace();
  console.log(data)
}

export function* watcherClickSaga () {
  yield takeEvery('CLICK', workerSaga)

}

export default function* rootSaga() {
  yield watcherClickSaga();
}