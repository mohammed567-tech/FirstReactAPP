import React from 'react';

function Footer(){
    const hour =new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOPen = hour >= openHour <= closeHour;
    // console.log(isOPen)

    return (
        <>
            <footer className='footer'>
                {/* {new Date().toLocaleTimeString()}. we're currently open */}
                {isOPen ? 
                <div className="order">
                    
                    <p> we're Open until {closeHour}:00. come visit us or order online </p>
                    <button className='btn'> Order </button>
                </div> 
                 : <p>we're open from {openHour}:00 to {closeHour}:00 </p>}
            </footer>
        </>
    );
}

export default Footer;
