import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GetData from './Components/GetData/GetData';
import Navbar from './Components/Navbar/Navbar';
import PostData from './Components/PostData/PostData';
import GetPres from './Components/GetPres/GetPres';
import PostPres from './Components/PostPres/PostPres';

function App() {
  //
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<div className='App'><GetData/></div>}/>
          <Route exact path="/Insert" element={<div className='App'><PostData/></div>}/>
          <Route exact path="/InsertP" element={<div className='App'><PostPres/></div>}/>
          <Route exact path="/Show" element={<div className='App'><GetPres/></div>}/>
        </Routes>
        
    </Router>
      
     
    </div>

    
  );
}

export default App;
