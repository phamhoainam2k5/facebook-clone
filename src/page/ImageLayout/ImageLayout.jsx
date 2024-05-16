import React from 'react'
import '../MainPage.css'
import { Avatar } from '@mui/material'
import avatar from '../../../public/images/dp0.png'

function ImageLayout({src, text}) {
  return (
    <div className='imglayout-container'>
        <div className='imglayout-imglayout'>
            <img className='imglayout-img' src={src} />
        </div>
        <div className='imglayout-text'>
            {text}
        </div>
    </div>
  )
}

export default ImageLayout