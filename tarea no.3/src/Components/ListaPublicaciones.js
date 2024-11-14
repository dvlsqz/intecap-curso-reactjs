import React, {useState, useEffect} from "react";

function ListaPublicaciones(){
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok){
                throw new Error('error de conexion')
            }

            return response.json();
        })
        .then((data) =>{
            setPublicaciones(data);
            setCargando(false);
        })
        .catch((error) => {
            setError(error);
            setCargando(false);
        });
    }, []);

    return (
        <div>
            <h1>Lista de Publicaciones</h1>
            <ul>
                {publicaciones.map((pub, index) =>(
                    <li key={index}>
                        <h5>
                            <strong>Titulo: </strong>
                            {pub.title}
                        </h5> 
                        <p>
                            <strong>Contenido: </strong> 
                            {pub.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaPublicaciones;

