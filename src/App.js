import Main from './Pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/AuthenticateUser/Signup';
import Login from './Components/AuthenticateUser/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
