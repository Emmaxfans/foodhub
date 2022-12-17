import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Loginpage from './pages/Loginpage';
import Signup from './pages/Signup';
import Orderpage1 from './pages/Orderpage1';
import Error from './pages/Error';
import FormTest from './pages/FormTest';
import SignUpSuccess from './pages/SignUpSuccess';


function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/order' element={<Orderpage1 />} />
        <Route path='/form' element={<FormTest />} />
        <Route path='/auth' element={<SignUpSuccess />} />
        <Route path='*' element={<Error />} />
      </Routes>

  );
}

export default App
