import React from 'react'
import { Fundcard, Fundraiser } from '../../components';
import './explore.style.css';

const Explore = () => {
  return (
    <div className='explore-page'>
        <Fundcard/>

        <div className="fundraiser-section">
            <Fundraiser />
            <Fundraiser />
            <Fundraiser />
            <Fundraiser />

        </div>
    </div>
  )
}

export default Explore