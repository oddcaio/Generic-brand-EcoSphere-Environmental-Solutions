import React from 'react';
import './App.css';
import tucano from '../../assets/images/tucano.jpg';
import folhas from '../../assets/images/folhas.jpg';
import rio from '../../assets/images/rio.jpg';

function App() {

  const imagens = [tucano, folhas, rio];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={tucano} alt="Tucano" className='background' />
    </div>
  );
}

export default App;
