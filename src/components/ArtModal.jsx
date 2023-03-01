import { useState, useEffect } from "react";
import "./ArtModal.scss";

export function ArtModal({ modalImage, visible, setVisible }) {
  function handleClose(e) {
    const modalcard = document.querySelector(".art-modal__card");
    const closeButton = document.querySelector(".close-modal");
    if (e.target.closest(".art-modal__card") === null) setVisible(false);
    if (e.target === closeButton ) setVisible(false);
  }

  return (
    <>
      {visible && (
        <div className="art-modal" onClick={handleClose}>
          <div className="art-modal__card">
           
              <img src={modalImage.url} alt={modalImage.title}></img>
            
            <div className="modalText">
              <h3>{modalImage.title}</h3>
              <p>{modalImage.description}</p>
            </div>
            <div className="close-modal">X</div>
          </div>
        </div>
      )}
    </>
  );
}
