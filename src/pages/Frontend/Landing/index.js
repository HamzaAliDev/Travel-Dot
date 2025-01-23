import React from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import wave1 from '../../../assets/pics/1.png';
import wave2 from '../../../assets/pics/2.png';
import wave3 from '../../../assets/pics/3.png';

export default function Landing() {
  const navigate = useNavigate()

  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Welcome','Todo Managment System'],
      typeSpeed: 100,
      backSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

    const handleStarted = () => {
        navigate('/auth/login');
    }


 return (
   <main>
     <div className='box'>
       <div className='mid-text-land-page'>
         <span ref={el} />
       </div>
          <button className='btn btn-primary start-btn' onClick={handleStarted}><span>Let's Started</span></button>
       <div className="line line1">
         <div className="wave wave1" style={{ backgroundImage: `url(${wave1})` }}></div>
       </div>
       <div className="line line2">
         <div className="wave wave2" style={{ backgroundImage: `url(${wave2})`}}></div>
       </div>
       <div className="line line3">
         <div className="wave wave3" style={{ backgroundImage: `url(${wave3})` }}></div>
       </div>
     </div>
   </main>
 )
}
