import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Currency from './Pages/Currency';
import Crypto from './Pages/Crypto';
import Cabinet from './Pages/Cabinet';
//import SignUp from './Pages/signup';
import News from './Pages/News';
import Calculator from './Pages/Calculator';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home/>} />
                <Route path='/Currency' element={<Currency/>} />
                <Route path='/News' element={<News/>} />
                <Route path='/Crypto' element={<Crypto/>} />
                <Route path='/Calculator' element={<Calculator/>}/>
                <Route path='/PersonalCabinet' element={<Cabinet/>}/>
            </Routes>
        </Router>
    );
}

export default App;