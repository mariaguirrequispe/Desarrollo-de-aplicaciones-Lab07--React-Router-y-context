// src/App.jsx
import Encabezado from "./components/Encabezado";
import TareasApp from "./TareasApp";

function App() {
  return (
    <div className="app">
      <Encabezado usuario="Rosa" />
      <TareasApp/>
    </div>
  );
}

export default App;