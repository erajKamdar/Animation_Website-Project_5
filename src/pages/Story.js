import React from 'react'
import useWebAnimations, {bounceInDown, pulse, bounceInUp} from '@wellyshen/use-web-animations'; 

import '../styles/Story.scss';
import Typing from 'react-typing-animation';
import pic from '../images/Story2.gif';


export default function Story() {
    const { keyframes, timing } = bounceInDown;
    const  refContentWriting  = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 500, // Delay 1s
        // iterations: Infinity
      },
    });
    const PulseInAnimation = pulse;
    const  AnimationInPulse  = useWebAnimations({
      keyframes: PulseInAnimation.keyframes,
      timing: {
        ...PulseInAnimation.timing,
        delay: 2000,
        iterations: Infinity
      }
    });
    const BounceInAnimation = bounceInUp;
    const  AnimationInBoune  = useWebAnimations({
      keyframes: BounceInAnimation.keyframes,
      timing: {
        ...BounceInAnimation.timing,
        delay: 500,
        // iterations: Infinity
      }
    });
    

    return (
        <div className="story">
            <div className="container">
                <div className="story-inner">
                    <div className="story-content" ref={AnimationInBoune.ref}>
                        <div className="story-content-inner">
                        <h1><Typing> OUR COMPANY STORY. </Typing> </h1>
                        <Typing>It happened since it was founded in 2004, so the company chose to share those milestones using a fun and clean design that incorporates clear headers.
                        So, We Have Decided to Be best.
 </Typing>
                        </div>
                    </div>
                    <div className="story-images" ref={refContentWriting.ref}>
                        <div className="story-images-inner" >
                            <div className="story-image one" ref={AnimationInPulse.ref}>
                                <img src={pic} alt="one" />
                            </div>
                            {/* <div className="story-image two" ref={AnimationInBounce.ref}>
                                <img src={pic2} alt="two" />
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}