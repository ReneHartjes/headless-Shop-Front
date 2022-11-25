
import './App.css';
import Mainpage from './components/pages/Mainpage';
import Produkte from './components/pages/Produkte';
import Detailpage from './components/pages/Detailpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <>
    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/products" element={<Produkte />} />
    <Route path="/detail/:artid" element={<Detailpage />} />
    
    </Routes>
    
    </>
    </Router>
  );
}

export default App;
