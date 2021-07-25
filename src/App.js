import logo from './logo.svg';
import './App.css';
import SignUpPage from './components/pages/auth/SignUpPage/SignUpPage';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return <Provider store={store}>
    <SignUpPage/>
  </Provider>
};

export default App;