import './App.css';

// import FunctionalComponent, {FunctionalComponent1, FunctionalComponent2, FunctionalComponent3} from './components/FunctionalComponent';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Loginpage from './components/Loginpage';
import Signup from './components/Signup';
import Orderpage1 from './components/Orderpage1';


// import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Sign-Up' element={<Signup />} />
        <Route path='/Order' element={<Orderpage1 />} />
      </Routes>

  );
}

export default App
