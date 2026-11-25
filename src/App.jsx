import './App.css';
import { useState } from 'react';
import whiteShortsleevedTshirt from './assets/whiteShortsleevedTshirt.jpg';
import blackShortsleevedTshirt from './assets/blackShortsleevedTshirt.jpg';
import blueShortsleevedTshirt from './assets/blueShortsleevedTshirt.jpg';

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
            <h2>T-Shirt Store</h2>
      </div>
      <div ClassName="App-Container">         
      
            <table>
                  <tr>
                        <th><img src={whiteShortsleevedTshirt} alt="White short sleeved t-shirt"/></th> 
                        <th><img src={blackShortsleevedTshirt} alt="Black short sleeved t-shirt"/></th> 
                        <th><img src={blueShortsleevedTshirt} alt="Blue Short sleeved t-shirt"/></th> 
                  </tr>
                  <tr>
                        <td>White</td>
                        <td>Black</td>
                        <td>Blue</td>
                  </tr>
                  <tr>
                        <td>
                              <table>
                                    <tr>
                                          <th>S</th>
                                          <th>M</th>
                                          <th>L</th>
                                    </tr>
                                    <tr>
                                          <td>
                                                <input
                                                      value={smallWhiteShortsleevedTshirtValue}
                                                      onChange={e => setSmallWhiteShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={mediumWhiteShortsleevedTshirtValue}
                                                      onChange={e => setMediumWhiteShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={largeWhiteShortsleevedTshirtValue}
                                                      onChange={e => setLargeWhiteShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                    </tr>
                                    
                              </table>
                        </td>
                        <td>
                              <table>
                                    <tr>
                                          <th>S</th>
                                          <th>M</th>
                                          <th>L</th>
                                    </tr>
                                    <tr>
                                          <td>
                                                <input
                                                      value={smallBlackShortsleevedTshirtValue}
                                                      onChange={e => setSmallBlackShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={mediumBlackShortsleevedTshirtValue}
                                                      onChange={e => setMediumBlackShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={largeBlackShortsleevedTshirtValue}
                                                      onChange={e => setLargeBlackShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                    </tr>
                                    
                              </table>
                        </td>
                         <td>
                              <table>
                                    <tr>
                                          <th>S</th>
                                          <th>M</th>
                                          <th>L</th>
                                    </tr>
                                    <tr>
                                          <td>
                                                <input
                                                      value={smallBlueShortsleevedTshirtValue}
                                                      onChange={e => setSmallBlueShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={mediumBlueShortsleevedTshirtValue}
                                                      onChange={e => setMediumBlueShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                          <td>
                                                <input
                                                      value={largeBlueShortsleevedTshirtValue}
                                                      onChange={e => setLargeBlueShortsleevedTshirtValue(e.target.value)}
                                                      type="number"
                                                />
                                          </td>
                                    </tr>
                                    
                              </table>
                        </td>
                  </tr>



            </table>
      </div>
   </div>
  )
}

export default App;