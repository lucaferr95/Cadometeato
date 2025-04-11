import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="d-flex flex-column justify-content-start bg-black gold py-4" data-bs-theme="dark">
      
      {/* Prima sezione - Link */}
      <div className="d-flex  justify-content-center align-items-center gold mb-1">
        <div className="d-flex flex-column flex-md-row justify-content-around w-50">
          <h5>CHI SIAMO</h5>
          <h5>ISO 90301/WMO</h5>
          <h5>CONTATTI</h5>
          <h5>POLICIES</h5>
          <h5>CAREERS</h5>
          <h5>CONSENSI</h5>
          <h5>PUBBLICITA'</h5>
        </div>
      </div>

      {/* Sezione Social */}
      <div className="container text-center opacity-50 mt-3 fs-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="gold mx-2">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="gold mx-2">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gold mx-2">
          <FaInstagram />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="d-flex justify-content-center align-items-center gold my-2">
        <div className="d-flex flex-column flex-md-row align-items-center w-50 my-2">
          <p className="text-center text-md-start">CadoMeteato Copyright 2002-2025</p>
          <p className="text-center text-md-start">CadoMeteato srl / Meteosolutions srl</p>
          <p className="text-center text-md-start">Iscrizione Registro delle imprese di Napoli del 13/01/2017</p>
          <p className="text-center text-md-start">n. REA 4432981 - PIVA 0419351016311, CS 57.000222€</p>
        </div>
      </div>

    </footer>
  );
};

export default MyFooter;
