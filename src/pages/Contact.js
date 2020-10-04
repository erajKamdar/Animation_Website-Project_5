import React from 'react'
import HI from '../images/hi.png';
import '../styles/Contact.scss';
import Webanimation from '@wellyshen/use-web-animations';
import useWebAnimations, { headShake, jackInTheBox, pulse } from '@wellyshen/use-web-animations';
export default function Contact() {
    const { keyframes, timing } = headShake;
    const  refContentWriting  = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 3000, // Delay 1s
        iterations: Infinity
      },
    });
    const FadeInTopAnimation = jackInTheBox;
    const  FadeInTopUpAnimation  = useWebAnimations({
      keyframes: FadeInTopAnimation.keyframes,
      timing: {
        ...FadeInTopAnimation.timing,
        duration: 1500,
         delay: 600,
      }
    });
    const PulseAnimation = pulse;
    const  PulseUpAnimation  = useWebAnimations({
      keyframes: PulseAnimation.keyframes,
      timing: {
        ...PulseAnimation.timing,
        duration: 1500,
        // delay: 500,
        iterations: Infinity
      }
    });
    const sayHi = Webanimation({
        keyframes: [
            { transform: 'translateY(10px) rotate(-40deg)' },
            // { transform: 'translateX(10px) rotate(20deg)'}

        ],
        timing: {
            duration: 1200,
            iterations: Infinity,
        }
    })
    return (

        <div className="contact">
            <div className="container">
                    <div className="contact-form" ref={FadeInTopUpAnimation.ref}>
                    <h1 ref={refContentWriting.ref}>Get in Touch</h1>
                    <p>HI <img src={HI} className='hi_img' ref={sayHi.ref}></img> PLEASE! FILL THIS FORM SO WE ARE GET IN TOUCH WITH YOU!</p>
                        <form>
                            <div className="input-fields" >
                                <input type="text" required name="name"placeholder="Name" />
                                <input type="text" required name="email"placeholder="Email Address" />
                                <input type="text" required name="phone"placeholder="Phone Number" />
                            </div>
                            <br/>
                            <div className="message">
                                <textarea name="Message" placeholder="Message"></textarea>
                                <br/>
                                <button ref={PulseUpAnimation.ref}>Send</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}