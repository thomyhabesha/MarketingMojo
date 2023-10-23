import React from 'react'
import Businesscard from '../../components/img/printimg/businesscard.jpg'
import Bg1 from '../../components/img/bgpic.jpg'
import Flyer2 from '../../components/img/printimg/flyer2.jpg'
import Data from '../printservice/Data'
import AOS from 'aos'
import  'aos/dist/aos.css'
import './Print2.css'
function Print2() {
  React.useEffect(()=>{
    AOS.init({duration:2500})
    },[]);
  return (

    <>
    <div  data-aos="zoom-in" className='showyou' 
    style={{backgroundImage:`url(${Bg1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <div className="showtext showtext1">
<h1>We Want TO make You Feel good About The Results</h1>
    </div>
    <div className='showimg'>
        <img src={Businesscard} alt=""/>
    </div>
    </div>

    <div className="showsec" data-aos="zoom-in" >
    <div className="showtext">
<h1>Flyers</h1>
<p>
A flyer is a type of paper advertisement that is typically found or handed out in public places. 
Flyers are usually printed on both sides and contain information about a product or event. They are designed 
to be eye-catching and easy to read so that people will stop and take notice.</p>
    </div>

    <div className='showimg'>
        <img src={Flyer2} alt=""/>
    </div>

    </div>
    </>
  )
}

export default Print2