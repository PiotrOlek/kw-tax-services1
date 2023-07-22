/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo
import Logo from '../assets/Logo_KWTax.png';

const Header = () => {
  const handleOfertaClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' style={{width: '200px', height: '130px'}}/>
          </a>
          <button className='btn btn-sm' onClick={handleOfertaClick}>Sprawdź naszą ofertę</button>
        </div>
      </div>
    </header>
  );
};

export default Header;