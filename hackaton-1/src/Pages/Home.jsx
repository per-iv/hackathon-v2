import Header from "../Componentes/Header";
import ImagenC from "../Componentes/ImagenC";
import Footer from "../Componentes/Footer";
import Rostro from "../Componentes/Rostro";
import Historial from "../Componentes/Historial";
import Modal from "../Componentes/Modal";

function Home() {
  return (
    <>
      <div className="container">
        <Header pagina="Inicio" />
        <ImagenC />
        <Modal />
        <Rostro/>
      </div>
      <Historial/>
      <Footer />
    </>
  );
}

export default Home;

