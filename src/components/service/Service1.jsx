import React from 'react'
import AOS from 'aos'
import  'aos/dist/aos.css'
import Image from '../../constants/Image'

import './Service.css'

export default function Service(){
    React.useEffect(()=>{
        AOS.init({duration:2000})
        },[]);

    return(
        <section className='service_sec' >
        <h1 Style="color:orange;">Our Client Love Working With Us</h1>
        <ul>
        <li><span><img src={Image.Increase} className="service_img" alt=""/></span><a href="/book">Advertisement</a></li>
        <li><span><img src={Image.Seacrchicon} className="service_img" alt=""/></span><a href="/book">SEO</a></li>
        <li><span><img src={Image.WebDesig} className="service_img" alt=""/></span><a href="/book">Website Development</a></li>
        <li><span><img src={Image.Consult} className="service_img" alt=""/></span><a href="/book">Free Consultancy</a></li>
        </ul>

        <div className='service-content'> 
            <div className='service_text'>
                <p>Paid media, SEO, email and conversion rate optimization to drive leads, pipeline, revenue.</p>
                <a href="/Aboutuspage" >Learn More</a>
            </div>
            <div className='service_cont-img'>
                <img src={Image.ManLaptop} alt="" data-aos="fade-left"/>
            </div>
        </div>

        <div className='promise_div'>
            <div className='promise' data-aos="zoom-in">
                <div className='promisetext'>
                    <p>YOU'R BUSINESS</p>
                    <p>THE RESULT</p>
                     <h1>1400<sup>+</sup></h1>
                     <p>Content Customers Leads</p>
                     <a href="/Aboutuspage">Learn More</a>
                </div>
                <img src={Image.Clientgirl} alt="" className='clientimg'/>
            </div>
        </div>
        </section>
    )
}