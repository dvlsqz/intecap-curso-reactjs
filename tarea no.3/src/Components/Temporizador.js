import React, {useState, useEffect} from "react";

function Temporizador({tiempoInicial}) {
    const [tiempo, setTiempo] = useState(tiempoInicial);

    useEffect(() =>{
        if( tiempo <= 0) return;

        const temporizadorD = setInterval(() => {
            setTiempo((prevTiempo) => prevTiempo -1);
    },1000);


    return () => clearInterval(temporizadorD);
}, [tiempo])

return (
    <div>
        <h1>Cuenta regresiva: {tiempo} segundos</h1>
        {tiempo === 0 && <p>Tiempo terminado</p>}
    </div>
);
}
export default Temporizador;
