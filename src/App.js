
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home/Home';
import Reviews from './pages/Reviews/Reviews';
import Login from './pages/Login/Login/Login';
import Navbar from './pages/Shared/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment>
              
            </Appointment>
          </RequireAuth>
        } />
        <Route path="reviews" element={<Reviews></Reviews>} />
        <Route path="contactus" element={<ContactUs></ContactUs>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
