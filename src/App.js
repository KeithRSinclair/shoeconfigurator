import './index.css';
import Card from 'react-bootstrap/Card';


import material1 from './images/material1.jpg';



function App() {
  return (
    <div className="App">
      <h1> &nbsp;Landing Page</h1>
      <Card>
        <Card.Img variant="top" src={material1} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
