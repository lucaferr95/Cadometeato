import { Row, Col } from "react-bootstrap";

const MyHome = () => {
  return (
    <div className="container bg-gradient bg-danger  d-flex flex-column mt-1">

      {/* Sezione di benvenuto con il logo */}
      <Row className="mb-0">
        <Col className="text-center mt-3 ">
        
          <img
            src="src/assets/logo/7d7f4463-345e-4838-948c-7c0d1ef5e5a9.png"
            alt="logo"
            
            className="w-25 bg-light opacity-75 mb-4 rounded-circle" // Immagine logo che occupa il 50% della larghezza
            height="300px"
          />
            <h2 className="text-light fst-italic my-3">Benvenuto su #CadoMeteato!</h2>
            <h3 className="gold"> Quest'app è stata creata grazie alle mie due lauree, entrambe conseguite con lode</h3>
            h
        </Col>
      </Row>

      {/* Sezione con le immagini */}
      <Row className=" mt-5">
        <Col>
          <img
            src="src/assets/Italian_regions_provinces.svg.png"
            alt="logo"
            className="w-100"
            height="auto"
          />
        </Col>
        
        <Col>
          <img
            src="src/assets/0781bf1e-af6d-11e4-bc0d-ad35c6a1f8f9.jpg"
            alt="second-logo"
            className="w-100 h-75 opacity-75"
            height="auto"
          />
        </Col>
      </Row>
    </div>
  );
};



export default MyHome;
