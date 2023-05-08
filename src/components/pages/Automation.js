import React from 'react'
import '../../App.css'
import '../Button.css'
import backgroundvideo from '../../videos/video-compressed.mp4';


function Automation() {
  window.scrollTo(0, 0);
    return (
      <div className="cards">
             <video src={backgroundvideo} loop autoPlay muted />
        <div className='hero'>
        <h1>Automation Projects</h1>
        <h2 className="herosection">
          <i class="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
          <h4 className="hr">Smart Twitter Bot</h4>
          <h5 className="stack"><i class="fab fa-python"></i> Python</h5>
          <div className="description">
            <ul>
              <h3>
                <li>
                  Gets followers and uploads media
                </li>
                <li>
                  Learns from Trending Tweets
                </li>
              </h3>
            </ul>
          </div>
          <a id="greenb" class="button fatbaby serif round glass">
           Smart Twitter Bot &nbsp;<i class="fab fa-python"></i>
          </a>
          <br></br>
          <a id="greenb" class="button fatbaby serif round glass">
            Project tutorial video <i class="far fa-play-circle"></i>
          </a>
        </div>
      </div>
    );
}

export default Automation