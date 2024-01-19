import React from "react";
import { NavLink } from 'react-router-dom';
import '../Explore.css';

const Explore = () => {
    return ( 
        <>
        <section className="showcase">
        <video src="/assets/ved1.mp4"  muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text_explore">
           <h1>Never Stop</h1>
           <h3>Shopping</h3>
            
            <NavLink to='/home' className="mt-5">Explore</NavLink>

        </div>




        </section>
            
        </>
     );
}

export default Explore ;