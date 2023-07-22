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
            <p className='text-gradient'></p>
            <p></p>
            <p className='text-gradient'></p>
            <p onClick={handlePhoneClick} style={{ cursor: 'pointer' }}></p>
          </div>
          <div>
            <p className='text-gradient'></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
