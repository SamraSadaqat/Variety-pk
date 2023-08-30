import React from 'react'
import Brands from '../Components/Brands'
import Category from '../Components/Category'


function Home() {
  return (
    <div style={{backgroundImage: 'url("https://www.nicepng.com/png/full/24-247272_background-pattern-s-white-background-pattern-png.png")',backgroundSize: 'cover', height:'160vh'}}>
    
    <div style={{backgroundImage: 'url("")',backgroundSize: 'cover'}}>

      <Brands />
      
    </div>
    
    <div style={{backgroundImage: 'url("")',backgroundSize: 'cover'}}>
      <Category/>
    </div>
    </div>
    
  )
}

export default Home