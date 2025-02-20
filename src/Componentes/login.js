import { Box, Button, TextField } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ({login}) => {
  const navigate = useNavigate();
  const [username, setUsername]= useState("");
  const [password, setPassword]= useState("");
  const onsubmit = (e) =>{
    e.preventDefault();
    if (!username || !password){
      alert ("los campos no deben estar vacios");
      return;
    }
    const isLogin = login({username, password});
    if (isLogin){
      
      setUsername("");
      setPassword("");
      navigate("/inicio");
    } else{
      alert("el login falló");
    }
  }
  
  
  return(
    <form onSubmit={onsubmit}>
      <Box
        margin = {"auto"}
        flexDirection= {"column"}
        display= {"flex"}
        width= {400}
        marginTop= {"20px"}
      >
        <TextField label= {"Username"}
        value={username}
        onChange= {(e) => setUsername(e.target.value)}/>
        <TextField label= {"Password"} 
          type= {"password"}
          value={password}
          onChange= {(e) => setPassword(e.target.value)}/>
        <Button type={"submit"} variant="contained">
          Login 
        </Button>
      </Box>
    </form>
  );
};
export default Login;