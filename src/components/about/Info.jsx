import React from 'react'
import HeadPic from '../../components/img/bgpic.jpg'
import Nav from '../navigation/Nav'
import Data from './Data.jsx'
import ReactPlayer from 'react-player'
import './Info.css'

function Info() {
  const about2=Data.map(items=>{
    return(
    <li>
    <h1>{items.header}</h1>
    <p>{items.paragraph}
    </p>
    </li>
    )
  })
    
  return (
    <div className='aboutus'>
<section className='aboutsection'>
<header >
  <img src={HeadPic} alt=''/>
  </header>
  <div />
  <div className='aboutus_overview'>
    <ul>
     {about2}
    </ul>

  </div>
</section>
</div>
  )
}

export default Info