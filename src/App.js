
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



function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="appointment" element={<Appointment></Appointment>} />
        <Route path="reviews" element={<Reviews></Reviews>} />
        <Route path="contactus" element={<ContactUs></ContactUs>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
