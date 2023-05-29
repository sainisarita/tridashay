import React from 'react'
import MyNavbar from '../navbar/MyNavbar'
import MyCarousal from '../carousal/MyCarousal'
import Paragraph from '../paragraph/Paragraph'
import Card from '../card/Card'
import Footer from '../footer/Footer'



const Main = () => {
  return (
<div className='main'>
<MyNavbar/>
<MyCarousal/>
<Paragraph/>
<Card/>
<Footer/>

</div>
  )
}

export default Main