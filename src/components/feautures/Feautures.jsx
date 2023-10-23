import React from 'react'
import Image from '../../constants/Image'
import Data from '../../constants/Data'
import AOS from 'aos'
import  'aos/dist/aos.css'
import './Feautures.css'

export default function Feautures(){
    React.useEffect(()=>{
AOS.init({duration:1500})
},[]);
    const feauture=Data.map(item=>{
        return(
<li data-aos="fade-right">
    <img alt="" src={item.img} />
    <h2>{item.h2}</h2>
    <p>{item.text}</p>
</li>
)})
    return(
        <section className='featuresection'>
        <h1>Brand Awareness</h1>
            <ul className="lists">
                
{feauture}
   </ul>
            </section>
    )
}