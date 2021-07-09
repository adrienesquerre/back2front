import React from 'react'
import '../../App.css'
import '../Button.css'
import { Button } from '../Button';
import { Link } from 'react-router-dom';


function Frontend() {
    return (
      <div className="cards">
             <video id="background-video" loop autoPlay>
                <source src={require('../../videos/video-4.mp4').default} type="video/mp4" />
            </video>
        <div className='hero'>
        <h1>Frontend Projects</h1>
        <h2 className="herosection">
          <i class="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
          <h4>Fluid Lightbox Popup</h4>
          <div className="description">
            <ul>
              <h3>
                <li>
                  Responsive gird of images with soft zoom effect on hover
                </li>
                <li>
                  Fullscreen image (full source quality) with preview text on
                  click
                </li>
              </h3>
            </ul>
          </div>
          <a id="greenb" class="button fatbaby serif round glass">
            Fluid Lightbox Popup <i class="fab fa-js-square"></i>
          </a>
          <br></br>
          <a id="greenb" class="button fatbaby serif round glass">
            Project tutorial video <i class="far fa-play-circle"></i>
          </a>
        </div>
      </div>
    );
}

export default Frontend