import './index.css';
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import TodayInfo from "./components/TodayInfo";

function App() {
  const store = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(store)
  return (
    <div className="App">
      <Header />
      <TodayInfo />
      WEATHER-APP
      <button onClick={()=>dispatch({type: 'CLICK'})}>Press me</button>
    </div>
  );
}

export default App;
