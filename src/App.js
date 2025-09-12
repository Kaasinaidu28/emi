import logo from './logo.svg';

import Firstone from './propscontainer/Firstone';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Weatherapp from './propscontainer/Weatherapp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';



import ChangeColor from './propscontainer/ChangeColor';

import Stopwatch from './propscontainer/Stopwatch';
import Counter from './propscontainer/Counter';
import Contact from './propscontainer/Contact';
import About from './propscontainer/About';
import './Prop.css';
import Navbar from './propscontainer/Navbar';
import Props from './propscontainer/Props';
import Form from './propscontainer/Form';
import First from './propscontainer/First';
import Download from './propscontainer/Download';
import Food from './propscontainer/Food';
import Temparature from './propscontainer/Temparature';
import Cityname from './propscontainer/Cityname';
import LoginForm from './propscontainer/Loginform';
import Login from './propscontainer/Login';
import GetData from './propscontainer/GetData';
import Naidu from './propscontainer/Naidu';
import ImgCorousel from './propscontainer/ImgCorousel';
import Phone from './propscontainer/Phone';

import Senddata from './propscontainer/Senddata';
import SimpleInterest from './propscontainer/SimpleInterest';
import Marquee from './propscontainer/Marquee';
import Api from './propscontainer/Api';
import ColorBox from './propscontainer/ColorBox';
import Log from './propscontainer/Log';
import Home from './propscontainer/Home';
import Read from './propscontainer/Read';
import Update from './propscontainer/Update';
import Create from './propscontainer/Create';
import Emi from './propscontainer/Emi';


//'https://fakestoreapi.com/products'



function App() {

  return (
    <div>
       {/*} <BrowserRouter>
      
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/crt' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
         <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>

      {/*<Form/>*/}

          {/*<First/>*/}
          {/*<Contact/>*/}
         {/*} <Firstone/>*/}
         {/*} <Download/>*/}
        {/* <Food/>*/}
        {/*<Weatherapp/>*/}
        {/*<Temparature/>*/}
       {/*} <Cityname/>*/}
      {/*} <Cityname/>*/}
    {/*<LoginForm/>*/}
      {/*<Login/>*/}
     {/*<GetData/>*/}
     {/*} <Naidu/>*/}
     {/* <ImgCorousel/>*/}
      {/*<Phone/>*/}
      {/*<Home/>*/}
      {/*<SimpleInterest/>*/}
    {/*<Marquee/>*/}
  
    
      {/*<Phone/>*/}
      {/*<Api1/>*/}
      {/*<Log/>*/}
      <Emi/>
      
  
{/*<ColorBox/>*/}
{/*<ChangeColor/>*/}
{/*<Stopwatch/>*/}
{/*<Navbar/>*/}
  
     
    </div>
  );
}

export default App;
