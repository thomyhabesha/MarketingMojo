import React from 'react'
import {useState} from 'react'
import Image from '../../constants/Image'

import './Hero.css'

export default function Hero(){
   
    return(
        
        <main className='hero'>
        <div className='hero_content'>
            <div className="hero_head">
            <h1>Make your <span >business </span> Reach Many</h1> 
           
            <h1 className="onli-img">
            Online.
            </h1>
             </div>
            <p>Increase sales and customers by levraging online medias, while you work 
                on other aspects, we Marketing Mojo will handle the marketing part. we make sure there is increase in your sales
                customers quickly.</p>
                <a href="/Book" className='btn'>Get Started</a>
                <ul className='floating'>
        <li><img src={Image.Follower} alt=""/></li>
        <li><img src={Image.Like} alt=""/></li>
        <li><img src={Image.Love}     alt=""/></li>
        </ul>
        
        </div>

        <div className="hero_imageright">
            <img  className="girlimage" src={Image.Girl2} alt=""/>
        </div>

        </main>

        
    )
}