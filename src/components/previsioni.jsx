import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import ItalyMap from "./ItalyMap";

const Previsioni = () => {
  const [city, setCity] = useState(""); // stato per la città da cercare
  const [fiveDaysWeather, setFiveDaysWeather] = useState(null); // stato per i dati meteo
  const [isLoading, setIsLoading] = useState(false); // stato per gestire il loading
  const [isError, setIsError] = useState(false); // stato per gestire gli errori
  const navigate = useNavigate(); // per navigare alla pagina corretta
  const params = useParams(); // per ottenere la città dalla rotta

  // Effettua la ricerca quando la rotta cambia o quando una nuova città è cercata
  useEffect(() => {
    if (!params.cityName) return; // non fare nulla se non c'è una città nella rotta

    setIsLoading(true); // inizia il caricamento
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&appid=a300bd377e630d896aa29ead1ba16946&units=metric&lang=it`;

    fetch(URL)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Errore nel recupero del meteo");
      })
      .then((data) => {
        if (!data.list) setIsError(true); // se non ci sono previsioni, setta errore
        else setFiveDaysWeather(data.list); // altrimenti, setta i dati meteo
      })
      .catch((err) => {
        console.log("Errore nel recupero dati:", err);
        setIsError(true);
      })
      .finally(() => setIsLoading(false)); // termina il caricamento
  }, [params.cityName]); // dipende dalla città nella rotta

  // Gestisce la ricerca quando l'utente invia il form
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/previsioni/${city.trim()}`); // naviga alla pagina della città cercata
      setCity(""); // resetta l'input dopo la ricerca
    }
  };

  return (
    <Container className="text-center mt-4 bg-warning">
      <img
        src="src/assets/logo/7d7f4463-345e-4838-948c-7c0d1ef5e5a9.png"
        alt="logo"
        width="220"
        height="160"
        className="mt-3 rounded-pill bg-info opacity "
      />
      <h3 className="text-white my-3">Da quale città cadimeteato?</h3>

      {/* Barra di ricerca fissa */}
      <Form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Cerca una città..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-50 me-2"
        />
        <Button variant="dark" type="submit">
          Cerca
        </Button>
      </Form>

      {/* Mostra mappa se non c'è una città selezionata */}
      {!params.cityName && <ItalyMap />}

      {isLoading && <Spinner animation="border" variant="warning" />}
      {isError && <Alert variant="danger">Errore nel recupero dei dati meteo.</Alert>}

      {fiveDaysWeather && (
        <Row className="justify-content-center">
          {fiveDaysWeather.slice(0, 5).map((forecast, index) => {
            // Raggruppiamo i dati per giorno (ogni previsione è per una specifica ora)
            const date = forecast.dt_txt.split(" ")[0]; // ottieni solo la data (es. 2025-04-10)
            const maxTemp = Math.max(
              ...fiveDaysWeather
                .filter((item) => item.dt_txt.split(" ")[0] === date)
                .map((item) => item.main.temp_max)
            );
            const minTemp = Math.min(
              ...fiveDaysWeather
                .filter((item) => item.dt_txt.split(" ")[0] === date)
                .map((item) => item.main.temp_min)
            );

            return (
              <Col key={index} md={2} className="mb-3">
                <div className="card rounded-pill bg-info text-white">
                  <div className="card-body">
                    <h6 className="card-title">{date}</h6>
                    <p className="card-text">🌡️ Max: {maxTemp.toFixed(1)}°C</p>
                    <p className="card-text">❄️ Min: {minTemp.toFixed(1)}°C</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

export default Previsioni;
