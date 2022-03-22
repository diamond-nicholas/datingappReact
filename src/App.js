import Main from './Pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/AuthenticateUser/Signup';
import Login from './Components/AuthenticateUser/Login';
import Home from './Components/Home/Home';
import Landing from './Components/LandingPage/Landing';
import DatingCards from './Components/DatingCards/DatingCards';
import Messages from './Components/Messages/Messages';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/encounter' element={<DatingCards />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Main />} />
        <Route path='/search' element={<Landing />} />
        <Route path='/messages' element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
