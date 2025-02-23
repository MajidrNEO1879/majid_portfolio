import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Container fluid className='App'>
      <Row>
        <Col>
          <HomePage/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
