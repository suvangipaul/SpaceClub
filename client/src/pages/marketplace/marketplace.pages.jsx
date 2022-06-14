import React from 'react'
import './marketplace.styles.css'
import GIF from '../../assets/space.gif'
import Head from '../../assets/space-header.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import {NFTCards} from '../../components'

const Marketplace = () => {
    return (
        <div className='m-main'>
            <div className='m-image'>
                <img src={Head} alt="" />
            </div>
            <div className="m-container">
                <div className="m-gif">
                    <img src={GIF} alt="" />
                </div>
                <div className='m-social'>
                    <InstagramIcon className='icon' />
                    <YouTubeIcon className='icon' />
                    <TwitterIcon className='icon' />
                    <PinterestIcon className='icon' />
                </div>
            </div>
            <div className='m-text'>
                <h1 className='m-head'>Space Clubbers</h1>
                <p className="m-para">Each Space themed NFT was randomly generated from a mix of over 900 traits, on-the-fly, when minted. There are over 10 trillion potential combinations and each resulting Space Club NFT is a unique 1-of-1.</p>
            </div>
            <div className="m-search">
          <input type="string"placeholder="Search items, collections and accounts." />
          </div>
          <div className="current">
            <div className="items">
                <h2>7.2K</h2>
                <p>items</p>
            </div>
            <div className="owners">
                <h2>3.8K</h2>
                <p>owners</p>
            </div>
            <div className="owners">
                <h2>20.0K</h2>
                <p>vol</p>
            </div>
            <div className="owners">
                <h2>16.5</h2>
                <p>floor price</p>
            </div>
          </div>
          <div className='cards'>
            <NFTCards />
          </div>
        </div>
    )
}

export default Marketplace