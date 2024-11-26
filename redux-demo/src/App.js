import './App.css';
// import CakeContainer from './Components/CakeContainer';
import {Provider} from 'react-redux'
import store from './Redux/store';
import IceCreamContainer from './Components/IceCreamContainer';
// import HooksCake from './Components/HooksCake';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <IceCreamContainer/>
      {/* <HooksCake/> */}
      {/* <CakeContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
