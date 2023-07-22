import React from 'react';

const Header = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:798707107";
  };

  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div>
            <p className='text-gradient'>Adres Firmy:</p>
            <p>Głuszyca 58-340 ul.Bohaterów Getta 8</p>
            <p className='text-gradient'>Numer Telefonu:</p>
            <p onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>798707107</p>
          </div>
          <div>
            <p className='text-gradient'>© 2023 KW-TAX.</p>
            <p className='text-gradient'>Wszelkie prawa zastrzeżone.</p>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
