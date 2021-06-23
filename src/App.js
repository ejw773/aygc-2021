import './App.css';
import Main from './components/MainComponent'
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Main />
      </div>
    </Router>
  );
}

export default App;
