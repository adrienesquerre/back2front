import React from 'react';
import './App.css';
import Gallery from './Gallery';

function Lightbox() {
  window.scrollTo(0, 0);
  return (
    <>
    <h2 style={{padding: '60px', fontSize: '45px'}}>Fluid Lightbox Popup</h2>
    <Gallery />
    </>
  );
}

export default Lightbox;
