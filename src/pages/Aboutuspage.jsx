import React from 'react'
import Nav from '../components/navigation/Nav'
import Footer from '../components/footer/Footer'
import Info from '../components/about/Info'
import YT from '../components/youtube/YT'

function Aboutuspage() {
  return (
    <div style={{backgroundImage:`linear-gradient(
      90deg,
      rgba(2,0,36,1)0%,
      rgba(36,36,151,1)41%,
      rgba(0,212,255,1)100%
  )`  
    }}>
    <Nav/>
    <Info/>
    <YT/>
    <Footer/>
    </div>
  )
}

export default Aboutuspage