import React from 'react'
import './collectables.styles.css'
import image from '../../assets/image 7.png'

const Collectables = () => {
  return (
    <div className='c-main'>
      <div className="c-image">
        <img src={image} alt="" />
      </div>
      <h1 className='c-heading'>Meet the Space Club Collectibles</h1>
      <p className="text">A collections of over thousands unique Space themed NFTs — unique digital collectibles living on the Ethereum blockchain. Your Space theme doubles as your Space Club membership card, and grants access to members-only benefits, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
    </div>
  )
}

export default Collectables