import React from 'react'
import '../../App.css'
import '../Button.css'
import backgroundvideo from '../../videos/video-compressed.mp4';

function Videos() {
  window.scrollTo(0, 0);
    return (
      <div className="cards">
            <video src={backgroundvideo} loop autoPlay muted />
        <div className='hero'>
        <h1>My videos</h1>
        <h2 className="herosection">
          <i class="fas fa-wrench fa-spin"></i> Ongoing construction
        </h2>
        </div>
        <div className="hero-btns">
          <h4 className="hr">Terraform to deploy a React app to AWS ECR </h4>
          <h5 className="stack"><i class="fab fa-docker"></i> Terraform, Docker & AWS</h5>
          <div className="description">
            <ul>
              <h3>
              <li>
                  A multi-stage stage Dockerfile is used
                </li>
                <li>
                  Terraform pulls the Image from AWS ECR 
                </li>
                <li>
                  NGINX web server, load balancer & auto-scalling on the background
                </li>
                <li>
                  My Terraform and React Github repositories are under the video description
                </li>
              </h3>
            </ul>
          </div>
          <div className="myvids">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/F6ikuuq0aaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sy0IiiNEjHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
}

export default Videos