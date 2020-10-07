import React, {useState, useEffect} from 'react';
import {withRouter, Link} from "react-router-dom";
import useWebAnimations, { jello, bounceInDown, flip } from '@wellyshen/use-web-animations';
import Menu from '../menu/Menu';
import LOGO from '../../images/logo.png';
import './Header.scss';
import '../background/Background.scss';
// import Webanimation from '@wellyshen/use-web-animations';
function Header({history}) {
  const { keyframes, timing } = jello;
  const  refContentWriting  = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500, // Delay 1s
      iterations: Infinity
    },
  });
  const BounceInAnimation = bounceInDown;
  const  BounceInDownAnimation  = useWebAnimations({
    keyframes: BounceInAnimation.keyframes,
    timing: {
      ...BounceInAnimation.timing,
      delay: 500,
    }
  });
  const flipAnimation = flip;
  const  flipingAnimation  = useWebAnimations({
    keyframes: flipAnimation.keyframes,
    timing: {
      ...flipAnimation.timing,
      duration:3000,
      delay: 500,
      iterations: Infinity
    }
  });



  // state for menu
  const [state, setState] = useState({
    initial: false, // menu is not opened
    clicked: null, // menu is not clicked yet
    icon: "Menu" // this will switch between menu and close for the icon
  });

  // handle click event for menu 
  const handleMenu = () => {
    disableMenu(); // run the timeout function everytime menu is clicked
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        icon: 'Close'
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        icon: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        icon: "Menu"
      });
    }
  };

  // state for disable button
  const [disable, setDisable] = useState(false);

  // function to let us know if button should be disabled
  const disableMenu = () => {
    setDisable(!disable);
    setTimeout(() => {
      setDisable(false);
    }, 1200);
  };

  // useEffect for pages changes using withRouter and history
  useEffect(() => {
    //listen for page changes
    history.listen(() => {
      setState({clicked: false, icon: 'Menu'})
    })
  })

//   const logo = Webanimation({
//     keyframes: [
//       { transform: 'translateX(0) rotate(90deg)' },
//       { transform: 'translateX(0) rotate(-90deg)' }

//     ],
//     timing: {
//         duration: 2000,
//         iterations: Infinity,
//     }
// })
  return (  
    <header className="header">
      <div className="container">
        <div className="row" ref={BounceInDownAnimation.ref} >
          <div className="logo" ref={flipingAnimation.ref}>
            <Link to="/" ><img src={LOGO} className="img_set" alt='LOGO'></img></Link>
          </div>
          <nav className="icon">
            <button disabled={disable} onClick={handleMenu} ref={refContentWriting.ref}>MENU</button>
          </nav>
        </div>
      </div>
      <Menu state={state}/>
    </header>
  )
};

export default withRouter(Header);