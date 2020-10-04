import React from 'react'
import useWebAnimations, { bounceInUp, pulse, swing } from '@wellyshen/use-web-animations';
import './Background.scss';

import ST from '../../images/background.gif';
import LA from '../../images/background_1.gif';
import NO from '../../images/background_2.gif';
import NYC from '../../images/background_5.gif';

const backgrounds = [
  {name: 'background', images: ST},
  {name: 'background_1', images: LA},
  {name: 'background_2', images: NO},
  {name: 'background_5', images: NYC},
]

export default function Background() {
    return (
        <div className="background" >
            <ul className="list">
                <li className="first"><strong>BACKGROUNDS:</strong></li>
                <li><a>Black & White</a></li>
                <li><a>Colour White</a></li>
                <li><a>Blue White</a></li>
                <li><a>Kite White</a></li>
            </ul>
        </div>
    )
}
