import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const MyNavbar = function (){
  const location = useLocation();

  return (
    <Navbar expand="lg" className="border-bottom border-body bg-black w-100 fs-4">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="src/assets/logo/7d7f4463-345e-4838-948c-7c0d1ef5e5a9.png"
            alt="logo"
            width="220"
            height="160"
            className="   rounded-pill bg-info "
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link className={location.pathname === '/' ? 'nav-link active gold' : 'nav-link gold'} to="/">Home</Link>
            <Link className={location.pathname === '/griffin' ? 'nav-link active gold' : 'nav-link gold'} to="/griffin">Previsioni</Link>
            <Link className={location.pathname === '/mylist' ? 'nav-link active gold' : 'nav-link gold'} to="/mylist">Dicono di noi</Link>
          </Nav>

          <div className="d-flex align-items-center gap-4">

            <div className="d-flex flex-column align-items-center gold">
              <span className="opacity-75">CONTATTI</span>
              <div className="d-flex gap-2 mt-1">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="gold">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="gold">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="gold">
                  <FaInstagram />
                </a>
              </div>
            </div>

        
            <Link to="/login" className="btn btn-outline-warning fw-bold gold">
              Accedi
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
