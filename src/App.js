//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
// import Header from './Componentes/Header';
// import Footer from './Componentes/Footer';
// import Boton from './Componentes/Boton';
import Lista from './Componentes/Lista';
import Add from './Componentes/add';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './Componentes/appbar';
// import CredentialsSignInPage from './Componentes/login';
import PaginaInicio from './Componentes/paginaInicio';
import Login from './Componentes/login';
import ItemInfo from './Componentes/ItemInfo';
import LifeCycle from './Pages/lifeCycle';
import { AuthProvider, useAuth } from './hooks/useAuth';
import useItems from './hooks/useItems';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [show, setShow] = useState(false);
  const { items, add, del } = useItems();
  const { auth, isLogin, login, logout } = useAuth();

  // Nuevo login handler
  const handleLogin = async (user) => {
    const result = await fetch(API_URL + "/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    if (data.isLogin) {
      login(data.token);
    }
    return data.isLogin;
  };
  //const nombre = "Luis Guzman";
  //const elemento = <h1> Hello, {nombre}</h1>;
  return (
    <div>
       <BrowserRouter>
       {isLogin && <ResponsiveAppBar setlogout = {logout} />}
        {/* <Header/> */}
        {/* <PaginaInicio/> */}
        <Routes>
          <Route path="/" element={<Login login={handleLogin} />} />
          <Route path="/inicio" element={<PaginaInicio/>} />
          <Route path="/add" element={<Add add={add} />} />
          <Route path="/items" element={<Lista items={items} ondelete={del} />} />
          <Route path="/items/:id" element={<ItemInfo items={items}/>} />
        </Routes>
        {/* <Footer/> */}
       </BrowserRouter>
       <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} </button>
       {show && <LifeCycle/>}
      
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
