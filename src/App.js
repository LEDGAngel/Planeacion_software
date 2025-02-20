//import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Boton from './Componentes/Boton';
import Lista from './Componentes/Lista';
import Add from './Componentes/add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './Componentes/appbar';
import CredentialsSignInPage from './Componentes/login';
import PaginaInicio from './Componentes/paginaInicio';
import Login from './Componentes/login';


function App() {
  const [items, setItems] = useState([{id: 1, name: "item1", price: 1}, {id: 2, name: "item2", price: 2}, {id: 3, name: "item3", price: 3}])
  let [count, setCount] =  useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };
  const del = (id) => {
    setItems(items.filter((item) => item.id !== id))
  };
  const setlogin = (user) => {
    if(user.username === "luis" && user.password === "123"){
      setIsLogin(true);
    }
    return isLogin;
  }
  const setlogout = () => {
    setIsLogin(false);
  } 
  //const nombre = "Luis Guzman";
  //const elemento = <h1> Hello, {nombre}</h1>;
  return (
    <div>
       <BrowserRouter>
       {isLogin && <ResponsiveAppBar setlogout = {setlogout} />}
        {/* <Header/> */}
        {/* <PaginaInicio/> */}
        <Routes>
          <Route path="/" element={<Login login={setlogin} />} />
          <Route path="/inicio" element={<PaginaInicio/>} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<Lista items={items} ondelete={del} />} />
        </Routes>
        {/* <Footer/> */}
       </BrowserRouter>
      
      {/* {count}
      <Boton name={"suma"} 
      click={sum}/>
      <Boton name={"resta"} click={resta}/>
      <Boton name={"mensaje"} click={() => alert("hola")}/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       {elemento}
    //     </p>
    //     <p>{count}</p> 
    //     <button onClick={sum}> add</button>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
