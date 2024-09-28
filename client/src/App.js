import './App.css';
import Parentcomponent from '../src/Components/parentprops';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Parentcomponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
