import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import CabinImg from '../../assets/img/cabin.png'
import CakeImg from '../../assets/img/cake.png'
import CircusImg from '../../assets/img/circus.png'
import GameImg from '../../assets/img/game.png'
import SafeImg from '../../assets/img/safe.png'
import SubmarineImg from '../../assets/img/submarine.png'



export default function Portfolio() {
  return (
   <section className="portfolio"> 
  <div className="container">
    <h2 className="page-section-heading text-center text-uppercase mt-3">Portfolio</h2>
    <div className="divider-custom">
      <div className="divider-custom-line" />
      <div className="divider-custom-icon">
        
        <FontAwesomeIcon icon={faStar} /></div>
      <div className="divider-custom-line" />
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={CabinImg} alt="..." />
      </div>
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={CakeImg} alt="..." />
      </div>
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={CircusImg} alt="..." />
      </div>
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={GameImg} alt="..." />
      </div>
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={SafeImg} alt="..." />
      </div>
      <div className="col-md-6 col-lg-4 mb-5">
        <img className="img-fluid" src={SubmarineImg} alt="..." />
      </div>
    </div>
  </div></section>

  )
}
