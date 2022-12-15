import './App.css';

// import FunctionalComponent, {FunctionalComponent1, FunctionalComponent2, FunctionalComponent3} from './components/FunctionalComponent';

import { Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Loginpage from './pages/Loginpage';
import Signup from './pages/Signup';
import Orderpage1 from './pages/Orderpage1';
import Error from './pages/Error';
import FormTest from './pages/FormTest';
import SignUpSuccess from './pages/SignUpSuccess';


// import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Login' element={<Loginpage />} />
        <Route path='/Sign-Up' element={<Signup />} />
        <Route path='/Order' element={<Orderpage1 />} />
        <Route path='/Form' element={<FormTest />} />
        <Route path='/Auth' element={<SignUpSuccess />} />
        <Route path='*' element={<Error />} />
      </Routes>

  );
}

export default App
