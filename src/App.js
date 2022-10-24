import {useState} from 'react'
import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutCaba } from "./components/routes/RoutesLayoutCaba"; 
import './App.css';
import {dataContext} from './components/useContext/useContext'
import image from './components/images/paracaidism.jpg'
import { info } from './components/utilities/Info'

//import { NavBarCaba } from "./components/routes/NavBarCaba";

function App() {
  const [data,setData]= useState({img:image,name:info.firtsName, lastname:info.lastName});
  return (
    <div className="App">
      <dataContext.Provider value={{data, setData}}>
        <BrowserRouter>
          {/* <NavBarCaba/> */}
          <RoutesLayoutCaba/>
        </BrowserRouter>
      </dataContext.Provider>
      
    </div>
  );
}

export default App;
