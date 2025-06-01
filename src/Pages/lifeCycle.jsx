import React, { useEffect, useState } from "react";

const LifeCycle = () => {
    const [text, setText] = useState("");

    useEffect(() => {console.log("componente montado")}, [])

    useEffect(() => {console.log("componente actualizado")}, [text])

    useEffect(() => {return () => console.log("componente desmontado")}, [])

    useEffect(() => {return () => console.log("componente siempre")})

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            {text}
        </div>
    );
};

export default LifeCycle;