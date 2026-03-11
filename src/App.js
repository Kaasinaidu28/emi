import logo from './logo.svg';

import Firstone from './propscontainer/Firstone';
import { BrowserRouter, Routes, Route , Navigate  } from 'react-router-dom';
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

import ColorBox from './propscontainer/ColorBox';
import Log from './propscontainer/Log';
import Home from './propscontainer/Home';
import Read from './propscontainer/Read';
import Update from './propscontainer/Update';
import Create from './propscontainer/Create';

import Api from './propscontainer/Api';
import ATM from './propscontainer/Atm';
import Practice from './propscontainer/Practice';
import Atm from './propscontainer/Atm';
import Atminf from './propscontainer/Atminf';
import Pingen from './propscontainer/Pingen';
import Amazonmini from './propscontainer/Amazonmini';
import Emi from './propscontainer/Emi';
import Page1 from './propscontainer/Page1';
import Count from './propscontainer/Count';
import Practice2 from './propscontainer/Practice2';
import Practice3 from './propscontainer/Practice3';
import Accordian from './propscontainer/Accordian';
import Accpractice from './propscontainer/Accpractice';



//'https://fakestoreapi.com/products'



function App() {

  return (
    <div>

      
      {/*} <BrowserRouter>
      
      <Routes>
           <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/crt' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
         <Route path='/read/:id' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>*/}

     {/* <BrowserRouter>
      <Routes>
    <Route path="/" element={<Navigate to="/Atminf" replace />} />
        <Route path="/Atminf" element={<Atminf />} />
        <Route path="/atm" element={<Atm />} />
         <Route path="/pingen" element={<Pingen />} />

      </Routes>
      
      </BrowserRouter>

      {/*BrowserRouter>
      <Routes>
     <Route path="/" element={<Navigate to="/amgmini" replace />} />
         <Route path="/amgmini" element={<Amazonmini/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
         <Route path="/count"  element={<Counter/>}></Route>
          <Route path="/emi"  element={<Emi/>}></Route>
      </Routes>
      </BrowserRouter>*/}

      {/*<Form/>*/}

          {/*<First/>*/}
          {/*<Contact/>*/}
         {/*} <Firstone/>*/}
         {/*} <Download/>*/}
        {/* <Food/>*/}
        {/*<Weatherapp/>*/}
        {/*<Temparature/>*/}
       {/*} <Cityname/>*/}
       {/*<Cityname/>*/}
    {/*<LoginForm/>*/}
      {/*<Login/>*/}
     {/*<GetData/>*/}
     {/*} <Naidu/>*/}
     {/* <ImgCorousel/>*/}
      {/*<Phone/>*/}
      {/*<Home/>*/}
      {/*<Practice3/>*/}
      {/*<SimpleInterest/>*/}
    {/*<Marquee/>*/}
    {/*<Atm/>*/}
   {/* <Navbar/>*/}
    {/*<Atminf/>*/}
    {/*<Amazonmini/>*/}
     {/* <Page1/>*/}
     {/*<Download/>*/}
     {/*<Count/>*/}
     {/*<Practice2/>*/}
     {/*<LoginForm/>*/}
     {/*<Atm/>*/}
     {/*<Atminf/>*/}
    {/*<Amazonmini/>*/}
    <About/>
    

    
  
  
    
      {/*<Phone/>*/}
      {/*<Api/>*/}
      {/*<Log/>*/}
      {/*<Emi/>*/}
      {/*<ATM/>*/}
      {/*<Log/>*/}
      {/*<Practice/>*/}
      
      
     
      
  
{/*<ColorBox/>*/}
{/*<ChangeColor/>*/}
{/*<Stopwatch/>*/}
{/*<Navbar/>*/}
  
     
    </div>
  );
}

export default App;
