import React from 'react';

const Footer = () => {
  return (
    <footer className='w-100 mt-auto bg-secondary p-4'>
      <div className='container flex-row'>
        <p className='mr-2'>
          &copy;2022 OverShare
        </p>
        <a className='text-dark' target='_blank' rel='noopener noreferrer' href='https://github.com/Amelia-was/over-share'>github</a>
      </div>
    </footer>
  );
};

export default Footer;