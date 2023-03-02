import React, { useState, useEffect } from "react";
import "./Modal.css";


export default function Modal() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  const [count, setCount] = useState(5);

  useEffect(() => {
    let timer;
  
    if (modal && count > 0) {
      timer = setInterval(() => setCount(prevCount => prevCount - 1), 1000);
    } else if (modal == 0) {
      setCount(5);
    }
  
    return () => clearInterval(timer);
  }, [modal, count]);


  const [overlayColor, setOverlayColor] = useState('red');

  useEffect(() => {
    let interval;

    if (modal) {
      interval = setInterval(() => {
        setOverlayColor(overlayColor === 'red' ? 'white' : 'red');
      }, 500);
    }

    

    return () => clearInterval(interval);
  }, [modal, overlayColor]);


  const [mostrar, setMostrar] = useState('hidden');
  useEffect(() => {
  if(count==0){
    setMostrar('visible');
  }

  if (modal == 0) {
    setMostrar('hidden');
  }


}, [count, mostrar]);

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        AVISO ARMA
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" style={{ '--overlay-color': overlayColor }}></div>
          
          <div className="modal-content">
            <h2>¡SE DETECTO UN ARMA!</h2>
            <p>
            !Se detecto a una persona con un arma! ¿Deseas reportar a la policia?
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CERRAR
            </button>
            <button className="report-modal" onClick={toggleModal}>
              REPORTAR A LA POLICIA
              </button>
            <button className="timer-modal">  
            Tiempo restante: {count}
            </button>
            <button  className="policia-modal" style={{ '--mostrar': mostrar }}>
              SE CONTACTO A LA POLICIA, ¡VAN EN CAMINO!
            </button>
          </div>
        </div>
      )}
      <p> </p>
    </>
  );
}
