import React from 'react'
import Nav from '../../src/components/navigation/Nav'
import Hero from '../../src/components/hero/Hero'
import Service1 from '../components/service/Service1'
import Article from '../../src/components/article/Articles'
import Footer from '../../src/components/footer/Footer'
import Features from '../components/feautures/Feautures'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      
<Nav/>
<Hero/>
<Service1/>
<Features/>
<Article/>
<Footer/>
    </div>
  )
}

export default Home
