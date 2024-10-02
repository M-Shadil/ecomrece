import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your E-mail</h1>
        <p>SubScribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='YourEmail id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter