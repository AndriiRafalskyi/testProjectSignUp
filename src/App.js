import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import StartSteps from './components/containers/StartSteps/StartSteps';

const App = () => {
  return <Provider store={store}>
    <StartSteps/>
  </Provider>
};

export default App;