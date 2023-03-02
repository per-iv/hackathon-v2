import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Componentes/Header';
import ImagenC from './Componentes/ImagenC';
import Footer from './Componentes/Footer';
import Rostro from './Componentes/Rostro';
import Modal from './Componentes/Modal.jsx';


function App() {
  return (
    <>
          <div className='container'>
      <Header/>
      <ImagenC/>
      </div>
      <Footer/>
    </>

  );
}

export default App;
