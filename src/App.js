import './App.css';
import Main from './components/MainComponent'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App container-fluid">
          <Main />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
