
import './App.css';
import Head from './Comp/Head';
import Search from './Comp/Search';
import { useState } from 'react';
import Main from './Comp/Main';


function App() {

  const [Location,setLocation] =useState("Dehradun")

  const changeLocation = (loc)=>
  {
       setLocation(loc)
  }



  document.body.style.backgroundImage = "url(Images/bg.jpg)"

  return (
    <>
      <Head />
      <Search changeLocation ={changeLocation} />
      <Main location ={Location} />
    </>
  );
}

export default App;
