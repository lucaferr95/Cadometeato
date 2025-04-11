import { Container, Row, Col, Card } from "react-bootstrap";

const Recensioni = () => {
  const comments = [
    { id: 1, name: "Giulia R.", comment: "Grazie a #Cadometeato ho evitato 10 broncopolmoniti" },
    { id: 2, name: "Marco P.", comment: "Per fortuna grazie a voi mi sono accorto che a San Valentino c'era grandine, adesso ho due bellissimi gemelli" },
    { id: 3, name: "Laura M.", comment: "Mi hanno pagato per fare questa recensione" },
    { id: 4, name: "Fabio L.", comment: "Un'app davvero completa. Mi ha aiutato molto con le previsioni meteo." },
  ];

  return (
    <Container className="mt-4">
      <h2 className="text-center">Cosa dicono di noi</h2>
      <Row className="mt-4">
        {comments.map((comment) => (
          <Col key={comment.id} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Text>{comment.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recensioni;
