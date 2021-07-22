import React from 'react'
import '../../App.css'
import { Button } from '../Button';
import { Link } from 'react-router-dom';


function Fullstack() {
  window.scrollTo(0, 0);
    return (
        <div className="cards">
             <video id="background-video" loop autoPlay>
                <source src={require('../../videos/video-3.mp4').default} type="video/mp4" />
            </video>
        <div className='hero'>
        <h1>Fullstack Projects</h1>
        <h2 className="herosection">
          <i class="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Interactive Calendar App</h4>
          <h5 className="stack"><i class="fab fa-react"></i> React</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                Uses the browser's date API for a live calendar
                </li>
                <li>
                Daily events can be added or deleted (uses local storage)
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/calendar'>
          <a id="greenb" class="button fatbaby serif round glass">
          Interactive Calendar App <i class="fab fa-react"></i>
          </a>
          </Link>
          <br></br>
          <a id="greenb" class="button fatbaby serif round glass">
            Project tutorial video <i class="far fa-play-circle"></i>
          </a>
        </div>
        <div className="hero-btns">
        <h4 className="hr">Breaking Bad API</h4>
          <h5 className="stack"><i class="fab fa-react"></i> React</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                Fetch API using Async function and Await promise
                </li>
                <li>
                Filter query to render info and image from characters
                </li>
                <li>
                Responsive gird of images with card flip effect on hover
                </li>
                <li>
                Search bar with name filter
                </li>
              </h3>
            </ul>
          </div>
          <Link to='/bbapi'>
          <a id="greenb" class="button fatbaby serif round glass">
          Breaking Bad API <i class="fab fa-react"></i>
          </a>
          </Link>
          <br></br>
          <a id="greenb" class="button fatbaby serif round glass">
            Project tutorial video <i class="far fa-play-circle"></i>
          </a>
        </div>
      </div>
    )
}

export default Fullstack