import React from 'react'

import useWebAnimations, { pulse, bounce, zoomInDown } from "@wellyshen/use-web-animations";
import './Banner.scss';

export default function Banner() {

    const { keyframes, timing } = pulse;
  const  refContentWriting  = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
    
      delay: 1500, // Delay 1s
      iterations: Infinity
    },
  });

  const fadeInLeftAnimation = bounce;
  const  websiteCopyrightingAnimation  = useWebAnimations({
    keyframes: fadeInLeftAnimation.keyframes,
    timing: {
      ...fadeInLeftAnimation.timing,
        duration: 2000,
      delay: 1500,
      iterations: Infinity
    }
  });

  const fadeInRightAnimation = zoomInDown;
  const  websiteRightAnimation  = useWebAnimations({
    keyframes: fadeInRightAnimation.keyframes,
    timing: {
      ...fadeInRightAnimation.timing,
      delay: 500,
    //   iterations: Infinity
    }
  });

    
        return (
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="line"  ref={websiteRightAnimation.ref} >
                            <h1 className="banner-title" ref={websiteCopyrightingAnimation.ref}>Welcome to Company!</h1>
                            <p ref={refContentWriting.ref}className="banner-text"><strong> Our Company provide you best services, creativity, and designs</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
}

        