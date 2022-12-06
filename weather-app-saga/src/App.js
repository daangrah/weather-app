import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const store = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(store)
  return (
    <div className="App">
      WEATHER-APP
      <button onClick={()=>dispatch({type: 'CLICK'})}>Press me</button>
    </div>
  );
}

export default App;
