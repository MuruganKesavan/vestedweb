import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    description, 
    description1,
    buttonLabel, 
    img, 
    alt, 
    imgStart
}) {
    return (
        <>
          <div
            className={lightBg ? 'hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDiscription: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtititle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/Start Investing">
                                    <Button buttonSize='btn--wide'>{buttonLabel}</Button>
                                </Link>
                                 <p className={lightTextDesc ? 'home__hero-subtititle' : 'home__hero-subtitle dark'}>{description1}</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default HeroSection;