


import './App.css';
import CardDesign from './components/CardDesing';
import CardHistory from './components/CardHistory';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import 'font-awesome/css/font-awesome.min.css';
import { useEffect } from 'react';







const cardHist = [];

function App() {



  const [cardH, setcardH] = useState(cardHist);



  const getCardData = (cardN, cardT, Status) => {

    setcardH((prevData) => {
      return [{ cardN, cardT, Status }, ...prevData];
    });


  }
  console.log(cardH);

  const cardApear = useSpring({ to: { opacity: 1 }, delay: 300, from: { opacity: 0 } });

  let cardHistoryOutput = cardH.map((card) => (

    <CardHistory cardNumber={card.cardN} cardType={card.cardT} Status={card.Status} />

  ));

  useEffect(() => { if (cardH.length > 5) cardH.pop(); });

  return (
    <div>

      <animated.div style={cardApear}> <CardDesign getData={getCardData} /> </animated.div>

      {cardHistoryOutput}


    </div >

  )

}

export default App;
