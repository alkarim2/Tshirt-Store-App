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
  const [largeWhiteShortsleevedTshirtValue, setLargeWhiteShortsleevedTshirtValue] = useState(0);
  const [smallBlackShortsleevedTshirtValue, setSmallBlackShortsleevedTshirtValue] = useState(0);
  const [mediumBlackShortsleevedTshirtValue, setMediumBlackShortsleevedTshirtValue] = useState(0);
  const [largeBlackShortsleevedTshirtValue, setLargeBlackShortsleevedTshirtValue] = useState(0);
  const [smallBlueShortsleevedTshirtValue, setSmallBlueShortsleevedTshirtValue] = useState(0);
  const [mediumBlueShortsleevedTshirtValue, setMediumBlueShortsleevedTshirtValue] = useState(0);
  const [largeBlueShortsleevedTshirtValue, setLargeBlueShortsleevedTshirtValue] = useState(0);

  return (
    <div>
      <div>
          <img src={tshirtStore} alt="T-shirt store"/>
      </div>
      <div>
          <img src={whiteText} alt="White"/>
          <img src={blackText} alt="Black"/>
          <img src={blueText} alt="Blue"/>
      </div>
      <div>
          <img src={sText} alt="Letter S"/>
          <img src={mText} alt="Letter M"/>
          <img src={lText} alt="Letter L"/>
          <img src={sText} alt="Letter S"/>
          <img src={mText} alt="Letter M"/>
          <img src={lText} alt="Letter L"/>
          <img src={sText} alt="Letter S"/>
          <img src={mText} alt="Letter M"/>
          <img src={lText} alt="Letter L"/>
      </div>
      <div>
          <img src={shortsleevedTshirt} alt="Short sleeved t-shirt"/>
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
          <input
                value={largeWhiteShortsleevedTshirtValue}
                onChange={e => setLargeWhiteShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={smallBlackShortsleevedTshirtValue}
                onChange={e => setSmallBlackShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={mediumBlackShortsleevedTshirtValue}
                onChange={e => setMediumBlackShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={largeBlackShortsleevedTshirtValue}
                onChange={e => setLargeBlackShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={smallBlueShortsleevedTshirtValue}
                onChange={e => setSmallBlueShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
           <input
                value={mediumBlueShortsleevedTshirtValue}
                onChange={e => setMediumBlueShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
          <input
                value={largeBlueShortsleevedTshirtValue}
                onChange={e => setLargeBlueShortsleevedTshirtValue(e.target.value)}
                type="number"
          />
      </div>
      <div>
          <img src={sleevelessTshirt} alt="Sleeveless t-shirt"/>
      </div>
    </div>
    );
}

export default App;