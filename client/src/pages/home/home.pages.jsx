import React from 'react'
import './home.styles.css'
import image from '../../assets/home.png'

const Home = () => {
  return (
    <div className='home-main'>
      <div className='home-bg'>
        <div className='home-image'>
          <img src={image} alt="" />
        </div>
        <h1 className='heading'>Welcome to <br/>Space Club</h1>
        <p className='para'>Space Club is a Web 3 decentralized charitable fundraising website with a huge collection of NFTs and wide varieties of projects. </p>
      </div>
    </div>
  )
}

export default Home