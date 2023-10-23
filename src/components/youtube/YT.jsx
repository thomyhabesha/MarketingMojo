import ReactPlayer from 'react-player'
import AOS from 'aos'
import  'aos/dist/aos.css'
import React from 'react'
import Crystal from '../../components/img/crystal.jpg'
import  './YT.css'

function YT() {
  React.useEffect(()=>{
    AOS.init({duration:2000})
    },[]);
    return (
  
  <div className='youtubecontent' data-aos="fade-up" data-aos-duration="4000" style={{
    background:`url(${Crystal})` 
  }}>
    <div className='youtube'>
        <ReactPlayer className="play" width="100%" url='https://www.youtube.com/watch?v=Nh3-yF6U-is' 
        controls={true}
        
        />
      </div>
      <div className='youtube_text'>
      <h1> We Are Markting <span>Mojo</span></h1>
      <p>Both in terms of the experience we hold, and the experience we create, we bring together the brightest minds in digital to craft experiences that are intutive. engaging, imactful and
        enlightening. we do everything from digital transformation and user experience design to digital marketing and managing colud services.
      </p>
  </div>
  </div>
  
    )
  }
  
  export default YT