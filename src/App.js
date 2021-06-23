import './App.css';
import Main from './components/MainComponent'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App container-fluid">
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
