import React from 'react'
import mastHeadImg from '../../assets/img/avataaars.svg'
export default function Masthead() {
  return (
<header className="masthead text-white text-center">
  <div className="container d-flex align-items-center flex-column">
    <img src={mastHeadImg} alt className="masthead-avatar mb-5" />
    <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
    <div> 
    </div>
    <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
  </div>
</header>

)
}

