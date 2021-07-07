import Form from './Components/Form';
import Squares from './Components/Squares';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState([]);

  const newSquare = ( newColor ) => {
    setColor( newColor );
    console.log(color);
  }

  return (
    <div className="App">
      <Form onNewSquare={ newSquare } prevColors={color} />
      <Squares colorList={ color } />
    </div>
  );
}

export default App;
