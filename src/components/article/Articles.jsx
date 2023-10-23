import React from 'react'
import Image from '../../constants/Image'
import Data from './Data'

import './Articles.css'

export default function Service(){
    
    const [datas,datasfunction]=React.useState(Data)
    const items=datas.map(items=>{
        return(
            <li>
                <img src={items.img} alt=""/>
                <a>{items.text}</a>
         </li>
        )
    })
    return(
        <section className='articles' >
            <div className='articles_list'>
        {items}
        </div>
        <div className='action'>
            <div>
               <a href="/book">READY TO LUANCH? GET IN TOUCH NOW</a>
            </div>
        </div>
        </section>
    )
}