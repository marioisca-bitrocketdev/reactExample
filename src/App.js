import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/home/Home';
import { Detail } from './component/detail/Detail';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:pippo" element={<Detail/>}/>
      </Routes>
    </Router>
  
  )
}

export default App;
