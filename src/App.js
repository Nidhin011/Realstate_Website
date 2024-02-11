import logo from './logo.svg';
import './App.css';
import "./index.css"
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Companies from './component/companies/companies';
import Residencies from './component/Residencies/Residencies';
// import Value from './component/value/value';
import Value from './component/value/Value';
import Contact from './component/contact/contact';
import GetStarted from './component/getstarted/GetStarted';
import Footer from './component/Footer/footer';



function App() {
  return (
<div className='App'>
<div>
<div className='white-gradient' />
<Header/>
<Hero/>
</div>
<Companies/>
 <Residencies/>
 
<Value/>
<Contact/>
<GetStarted/>
<Footer/>


</div>
  );
}

export default App;
