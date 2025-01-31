import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://neumopymbackend-1.onrender.com/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error en la respuesta: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setMensaje(data.mensaje || "Mensaje no encontrado"))
      .catch((err) => setError(`Error al cargar el mensaje: ${err.message}`));
  }, []);

  return (
    <div>
      <h1>{error ? error : mensaje}</h1>
    </div>
  );
}

export default App;

