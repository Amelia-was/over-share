import React from 'react';

const Footer = () => {
  return (
    <footer className='w-100 mt-auto bg-secondary p-4'>
      <div className='container flex-row'>
        <p className='mr-2'>
          &copy;2022 OverShare
        </p>
        <a className='text-dark' href='https://github.com/amelia-was'>github</a>
      </div>
    </footer>
  );
};

export default Footer;