import React, {useRef} from 'react'
import gsap from 'gsap';
import useWebAnimations, {headShake, bounceInUp} from '@wellyshen/use-web-animations'
import '../styles/Home.scss';
import IMG from '../images/images (3).png';
import IMG1 from '../images/images_1.png'
import Banner from '../components/banner/Banner';
import Webanimation from '@wellyshen/use-web-animations';
import DC from '../images/background.gif';
import LA from '../images/background_1.gif';
import NO from '../images/background_2.gif';
import NYC from '../images/background_5.gif';


export default function Home() {
    const { keyframes, timing } = headShake;
  const  refContentWriting  = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 2000, // Delay 1s
      duration: 1000,
      iterations: Infinity
    },
  });
  const BounceInAnimation = bounceInUp;
  const  BounceInUpAnimation  = useWebAnimations({
    keyframes: BounceInAnimation.keyframes,
    timing: {
      ...BounceInAnimation.timing,
      delay: 500,
    }
  });
  const triangle = Webanimation({
    keyframes: [
        { transform: 'translateX(10px) rotate(90deg)' },
        // { transform: 'translateX(10px) rotate(-90deg)'},
        { transform: 'translateY(10px) rotate(-90deg)' },
        // { transform: 'translateY(10px) rotate(90deg)' },


    ],
    timing: {
        duration: 1000,
        iterations: Infinity,
    }
})

const triangle2 = Webanimation({
    keyframes: [
        { transform: 'translateX(10px) rotate(-90deg)'},
        { transform: 'translateY(10px) rotate(90deg)' },
        // { transform: 'translateY(10px) rotate(90deg)' },


    ],
    timing: {
        duration: 1000,
        iterations: Infinity,
    }
})
    // DOM NODE
    let cityBackground = useRef(null);

    const cities = [
    {name: 'Pink Petals', image: DC},
    {name: 'Colour White', image: LA},
    {name: 'Blue White', image: NO},
    {name: 'Star White', image: NYC},
    ]

    const handleCity = city => {
        gsap.to(cityBackground, {
            duration: 0,
            background: `url(${city}) center center`
        });
        gsap.to(cityBackground, {
            opacity: .9,
            duration: 0.4,
            ease: 'power3.inOut'
        });
        gsap.to(cityBackground, {
            duration: 0.4,
            skeyY: 2,
            transformOrigin: 'right top'
        });
    };

    

    return (
        <div className="home">
            <div ref={el => {cityBackground =el}} className="cityBackground"></div>
            <div className="container">
            <img ref={triangle.ref} src={IMG1} style={
                {height : '20vh',
                 float : "right" ,
                 position : "relative",
                 top : '7vh', 
                 right: '2vw',
                 }} ></img>
            <Banner />
            <img ref={triangle2.ref} src={IMG} style={
                {height : '20vh',
                position : "relative",
                bottom : '3.8vh',
                
                 }} ></img>
                <div className="background" ref={BounceInUpAnimation.ref}>
                    <ul className="list" ref={refContentWriting.ref}>
                        <li className="first"><strong>BACKGROUNDS:</strong></li>
                        {cities.map(el => 
                            (<li><a key={el.name} onMouseEnter={() => handleCity(el.image)} >{el.name}</a></li>))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
};