import Main from './Pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/AuthenticateUser/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route path='/home' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
