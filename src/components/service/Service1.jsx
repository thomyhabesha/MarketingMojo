import React from 'react'
import {Link} from 'react-router-dom'
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
        <li><span><img src={Image.Increase} className="service_img" alt=""/></span><Link to="/book">Advertisement</Link></li>
        <li><span><img src={Image.Seacrchicon} className="service_img" alt=""/></span><Link to="/book">SEO</Link></li>
        <li><span><img src={Image.WebDesig} className="service_img" alt=""/></span><Link to="/book">Website Development</Link></li>
        <li><span><img src={Image.Consult} className="service_img" alt=""/></span><Link to="/book">Free Consultancy</Link></li>
        </ul>

        <div className='service-content'> 
            <div className='service_text'>
                <p>Paid media, SEO, email and conversion rate optimization to drive leads, pipeline, revenue.</p>
                <Link to="/Aboutuspage" >Learn More</Link>
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
                     <Link to="/Aboutuspage">Learn More</Link>
                </div>
                <img src={Image.Clientgirl} alt="" className='clientimg'/>
            </div>
        </div>
        </section>
    )
}