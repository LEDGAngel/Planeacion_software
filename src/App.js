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


function App() {
  const [items, setItems] = useState([])
  const [auth, setAuth] = useState("")
  // let [count, setCount] =  useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if(isLogin)
      {
        getItems();
      }
  }, [isLogin]);
  const getItems = async () => {
    const result = await fetch("http://localhost:5000/items/", {method:"GET", headers: {"Authorization":auth},
  });
    const data = await result.json();
    setItems(data);
  }
  // const sum = () => {
  //   setCount(count + 1);
  // };
  // const resta = () => {
  //   setCount(count - 1);
  // };
  const add = async (item) => {
    //item.id = items.length + 1;
    const result = await fetch("http://localhost:5000/items/", {method:"POST", headers:{"content-type":"application/json", "Authorization":auth}, body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, data.item]);
  };
  const del = async (id) => {
    await fetch("http://localhost:5000/items/"+id, { method: "DELETE", headers: {"Authorization":auth},});
    setItems(items.filter((item) => item.id !== id))
  };
  const setlogin = async (user) => {
    const result = await fetch("http://localhost:5000/login/", {method:"POST", headers:{"content-type":"application/json"}, body: JSON.stringify(user),
    });
    const data = await result.json();
    setIsLogin(data.isLogin);
    setAuth(data.token);
    return data.isLogin;

    // if(user.username === "luis04" && user.password === "lui$23"){
    //   setIsLogin(true);
    // }
    // return isLogin;
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
