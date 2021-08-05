import React from 'react'
import '../../App.css'
import '../Button.css'

function Videos() {
  window.scrollTo(0, 0);
    return (
      <div className="cards">
             <video id="background-video" loop autoPlay>
                <source src={require('../../videos/video-compressed.mp4').default} type="video/mp4" />
            </video>
        <div className='hero'>
        <h1>My crappy videos</h1>
        <h2 className="herosection">
          <i class="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
          <h4 className="hr">React Overview, How it works, Hooks</h4>
          <h5 className="stack"><i class="fab fa-react"></i> React</h5>
          <div className="description">
            <ul>
              <h3>
              <li>
                  The video is a bit crappy, but the content is really good
                </li>
                <li>
                  Learn how React works under the hood
                </li>
                <li>
                  This is what u need to start building with React
                </li>
              </h3>
            </ul>
          </div>
          <div className="myvids">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CdaJ-i4kA-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
}

export default Videos