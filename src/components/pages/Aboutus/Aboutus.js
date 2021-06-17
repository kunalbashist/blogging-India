import React from 'react';
import './Aboutus.css';
import 'tachyons';  

function Aboutus() {
    return (
        <>
            <div className="kunal ma4 mh4 bg-dark dib pa2 pv3">
              <img src="images/kunal.jpg" alt="Kunal"  />
              <h1> Kunal Bashist </h1>            
            </div>

            <div className="chandani ma4 mh4 bg-dark dib pa2 pv3">
            <img src="images/chandani.jpg" alt="chandani" />
            <h1> Kumari Chandni </h1>            
          </div>

          <div className="abhinav ma4 mh4 bg-dark dib pa2 pv3">
          <img src="images/abhinav.JPG" alt="Abhinav" />
          <h1> Abhinav Kumar </h1>            
        </div>
       </> 
    
    )
}

export default Aboutus
