import React from 'react'
import Brocher2 from '../../components/img/printimg/brocher2.jpg'
import Banner from '../../components/img/printimg/banner.jpg'
import AOS from 'aos'
import  'aos/dist/aos.css'
import Data from './Data'
import './Printservice.css'

function Printservice() { 
  return (
    <div className='printdiv' >
        <div className="first" >
            <h1>Banner</h1>
            <p>A banner is a large display 
used for advertising, marketing, or promoting events. A banner design is a great way to market a
 company's services or products. These designs not only provide a visual component that targets an audience's 
 purchasing intent, 
but these banners are also a smart way to raise brand awareness and attract new customers.</p>
        </div>

        <div className='secound' >
            <img src={Banner} alt=""/>
        </div>
 <div className='forth' >
<img src={Brocher2} alt=""/>
 </div>
 <div className='thired' >
<h1>Brochers</h1>
<p>Brochure design service is one of the best processes of making out your business products or services marketing
 so that you can get all the positive and huge feedback for increasing your business selling. T
he brochure can be the best way for your branding also as you need to design the brochure following your 
business branding also.</p>
 </div>
    </div>
  )
}

export default Printservice