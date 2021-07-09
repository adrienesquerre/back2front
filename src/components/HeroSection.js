import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';
import Cards from './Cards';

function HeroSection() {
    return (
        
        <div className='hero-container'>
    
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    FRONTEND PROJECTS
                </Button>
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    BACKEND PROJECTS
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    REACT EXPLAINED <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>

    )
}

export default HeroSection
