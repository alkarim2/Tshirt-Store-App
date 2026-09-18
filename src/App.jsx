import './App.css';
import { useState } from 'react';
import whiteText from './assets/whiteText.jpg';
import blackText from './assets/blackText.jpg';
import blueText from './assets/blueText.jpg';
import sText from './assets/sText.jpg';
import mText from './assets/mText.jpg';
import lText from './assets/lText.jpg';
import shortsleevedTshirt from './assets/shortsleevedTshirt.jpg';
import sleevelessTshirt from './assets/sleevelessTshirt.jpg';
import tshirtStore from './assets/tshirtStoreText.jpg';

function App(){
  const [smallWhiteShortsleevedTshirtValue, setSmallWhiteShortsleevedTshirtValue] = useState(0);
  const [mediumWhiteShortsleevedTshirtValue, setMediumWhiteShortsleevedTshirtValue] = useState(0);

  return (
    <div>
      <div>
          <img src={tshirtStore}/>
      </div>
      <div>
          <img src={whiteText}/>
          <img src={blackText}/>
          <img src={blueText}/>
      </div>
      <div>
          <img src={sText}/>
          <img src={mText}/>
          <img src={lText}/>
          <img src={sText}/>
          <img src={mText}/>
          <img src={lText}/>
          <img src={sText}/>
          <img src={mText}/>
          <img src={lText}/>
      </div>
      <div>
          <img src={shortsleevedTshirt}/>
          <input
                value={smallWhiteShortsleevedTshirtValue}
                onChange={e => setSmallWhiteShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={mediumWhiteShortsleevedTshirtValue}
                onChange={e => setMediumWhiteShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
      </div>
      <div>
          <img src={sleevelessTshirt}/>
      </div>
    </div>
    );
}

export default App;