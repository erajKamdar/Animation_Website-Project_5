import React from 'react';
import Img from '../images/giphy.gif' 
import '../styles/About.scss';
import Img2 from '../images/develpoment.gif';
import Typing from 'react-typing-animation';
import useWebAnimations, { fadeInTopLeft, fadeInTopRight, bounce} from '@wellyshen/use-web-animations';
export default function About() {

    const { keyframes, timing } = fadeInTopRight;
    const  refContentWriting  = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 500, // Delay 1s
        // iterations: Infinity
      },
    });
    // const FadeInTopAnimation = fadeInTopRight;
    // const  FadeInTopUpAnimation  = useWebAnimations({
    //   keyframes: FadeInTopAnimation.keyframes,
    //   timing: {
    //     ...FadeInTopAnimation.timing,
    //     delay: 500,
    //   }
    // });
    const FadeInAnimation = fadeInTopLeft;
    const  FadeInUpAnimation  = useWebAnimations({
      keyframes: FadeInAnimation.keyframes,
      timing: {
        ...FadeInAnimation.timing,
        delay: 500,
      }
    });
    const BounceInAnimation = bounce;
    const  BounceInUpAnimation  = useWebAnimations({
      keyframes: BounceInAnimation.keyframes,
      timing: {
        ...BounceInAnimation.timing,
        duration: 1500,
        delay: 2000,
        iterations: Infinity
      }
    });

    

    return (
        <div className="food">
            <div className="container" >
                <div className="left-container" ref={refContentWriting.ref}>
                    <div  className="left-container-inner">
                        <div className="text-content">
                            <img className="img_set_1" src={Img2}></img>
                        </div>
                    </div>
                </div>
                <div className="right-container" ref={FadeInUpAnimation.ref}>
                    <div className="right-container-inner">
                        <img src={Img} className="set_img_2" ref={BounceInUpAnimation.ref}></img>
                        <div className="right-text-content">
                                
                                    <h2>ABOUT US .</h2>
                               
                                <Typing>
                                
                                <p> The takeaway for marketers? Know your audience, and make it obvious to that audience the instant they read about you on your website.
                                These aren't company traits you'd think to include when starting out, but they're what your customers often make gut decisions on when buying.
                                A line like that draws in the audience, because we know it's not going to be typical.
                                When you create lovable marketing, you can start a movement of brand evangelists and advocates who will help you grow.
                                </p>
                                </Typing>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}