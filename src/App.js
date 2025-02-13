import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Boton from './Componentes/Boton';
import Lista from './Componentes/Lista';
import Add from './Componentes/add';

function App() {
  const items = [{id: 1, name: "item1", price: 1}, {id: 2, name: "item2", price: 2}, {id: 3, name: "item3", price: 3}]
  let [count, setCount] =  useState(0);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    items.push(item);
  };
  const nombre = "Luis Guzman";
  const elemento = <h1> Hello, {nombre}</h1>;
  return (
    <div>
      <Header/>
      {count}
      <Boton name={"suma"} 
      click={sum}/>
      <Boton name={"resta"} click={resta}/>
      <Boton name={"mensaje"} click={() => alert("hola")}/>
      <Add add={add} />
      <Lista items={items}/>
      <Footer/>
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
