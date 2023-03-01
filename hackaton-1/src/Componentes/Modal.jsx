import React, { useState } from "react";
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


  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        AVISO ARMA
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
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
          </div>
        </div>
      )}
      <p> </p>
    </>
  );
}
