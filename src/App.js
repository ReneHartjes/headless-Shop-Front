
import './App.css';
import Mainpage from './components/pages/Mainpage';
import Produkte from './components/pages/Produkte';
import Detailpage from './components/pages/Detailpage';
import Shoppingcart from './components/pages/Shoppingcart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RubView from './components/pages/RubView';


function App() {
  return (
    <Router>
    <>
    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/products" element={<Produkte />} />
    <Route path="/detail/:artid" element={<Detailpage />} />
    <Route path="/cart" element={<Shoppingcart />} />
    

    <Route path="/products/Bodenprofile" element={<RubView cat="Bodenprofile"/>} />
    <Route path="/products/FüllungenundHalter" element={<RubView cat="FüllungenundHalter"/>} />
    <Route path="/products/Geländerpfosten" element={<RubView cat="Geländerpfosten" />} />
    <Route path="/products/Glasleistenrohre" element={<RubView />} />
    <Route path="/products/Handläufe" element={<RubView />} />
    <Route path="/products/Französische Balkone" element={<RubView />} />
    <Route path="/products/Bodenglasklemmen" element={<RubView />} />
    <Route path="/products/Glasadapter" element={<RubView />} />
    <Route path="/products/Befestigungsmaterial" element={<RubView />} />
    <Route path="/products/Werkzeuge" element={<RubView />} />

    </Routes>
    
    </>
    </Router>
  );
}

export default App;
