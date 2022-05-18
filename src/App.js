
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
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import MyReview from './pages/Dashboard/MyReview';
import MyHistory from './pages/Dashboard/MyHistory';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Login/RequireAdmin';




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
        <Route path="dashboard" element={ <RequireAuth><Dashboard></Dashboard></RequireAuth>} >
        <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          
         </Route>
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
