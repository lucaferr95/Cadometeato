import { useNavigate } from "react-router-dom";


const ItalyMap = () => {
  const navigate = useNavigate();

  const handleClick = (city) => {
    navigate(`/previsioni/${city}`);
  };

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <img src="src\assets\Italian_regions_provinces.svg.png" alt="Mappa Italia" style={{ width: "100%" }} />

      {/* Milano */}
      <button
        onClick={() => handleClick("Milano")}
        style={{ position: "absolute", top: "20%", left: "30%", transform: "translate(-50%, -50%)" }}
        className="btn btn-danger btn-sm"
      >
        Milano
      </button>

      {/* Piacenza */}
      <button
        onClick={() => handleClick("Piacenza")}
        style={{ position: "absolute", top: "28%", left: "30%", transform: "translate(-50%, -50%)" }}
        className="btn btn-danger btn-sm"
      >
        Piacenza
      </button>

      {/* Roma */}
      <button
        onClick={() => handleClick("Roma")}
        style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%, -50%)" }}
        className="btn btn-danger btn-sm"
      >
        Roma
      </button>

      {/* Napoli */}
      <button
        onClick={() => handleClick("Napoli")}
        style={{ position: "absolute", top: "55%", left: "65%", transform: "translate(-50%, -50%)" }}
        className="btn btn-danger btn-sm"
      >
        Napoli
      </button>
    </div>
  );
};

export default ItalyMap;
