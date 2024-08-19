/*import logo from './logo.svg';
import './App.css';    
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Footer from './Component/Footer';  
/*import FirstYear from './Component/FirstYear';  
import SecondYear from './Component/SecondYear';
import ThirdYear from './Component/ThirdYear';
import Sem1 from './Component/Sem1';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import ForgotPassword from './Component/ForgotPassword';
import Resetpassword from './Component/Resetpassword';
import UploadFile from './Component/DriverManger';
import List from './Component/List';
import DeleteFile from './Component/DeleteFile';
import FileUpload from './Component/FileUpload';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>

      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/files' element={<List/>}/>
      <Route path='/reset' element={<Resetpassword/>}/>
      <Route path='/choose' element={<UploadFile/>}/>
      <Route path='/delfile' element={<DeleteFile/>}/>
      <Route path='/create' element={<FileUpload/>}/>
      <Route path='/forgot/:id/:token' element={<ForgotPassword/>}/>
      </Route>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>  
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp';
import AdminSignUp from './Component/AdminSignUp';
import AdminLogin from './Component/AdminLogin';
import Admin from './Component/Admin';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import ForgotPassword from './Component/ForgotPassword';
import Resetpassword from './Component/Resetpassword';
import UploadFile from './Component/DriverManger';
import List from './Component/List';
import FileUpload from './Component/FileUpload';
import Home from './Component/Home';
import Header from './Component/Header';
import Courses from './Component/Courses';
import About from './Component/About';
import Teachers from './Component/Teachers';
import Reviews from './Component/Reviews';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Home />} />
            <Route path='/course' element={<Courses/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/teacher' element={<Teachers/>}/>
            <Route path='/review' element={<Reviews/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/files' element={<List />} />
          
            <Route path='/choose' element={<UploadFile />} />
            <Route path='/create' element={<FileUpload />} />
            <Route path='/adminsignup' element={<AdminSignUp />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path="/forgot/:id/:token" element={<ForgotPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset' element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
     