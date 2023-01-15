import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './components/Home';
import AddItem from './components/AddItem';
import './components/styles.css';

function App() {
  return (
    <Router>
    <div className="App">
     <TopBar />
     <div className='content'>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
     </div>
    
    </div>
    
    </Router>
  );
}
 
export default App;
