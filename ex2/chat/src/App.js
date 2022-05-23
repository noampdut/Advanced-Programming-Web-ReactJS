import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ChattingPage from './ChattingPage/ChattingPage';
import { useState } from 'react';

function App() {
    const [activeUser, setActiveUser] = useState({ 'userName': '', 'nickName': '', 'picture': '', 'contacts': {}})
    //<Route path='/Rate' render={() => <Redirect to='http://localhost:5001/rates' />}/>
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Login setActiveUser={setActiveUser} />}></Route>
          <Route path = '/Login' element={<Login setActiveUser={setActiveUser} />}></Route>
          <Route path = '/Register' element={<Register setActiveUser={setActiveUser}/>}></Route>
          <Route path = '/ChattingPage' element={<ChattingPage activeUser={activeUser}/>}></Route>
         

       </Routes>
    </BrowserRouter>
  );
}

export default App;
