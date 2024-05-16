import React from 'react'
import '../MainPage.css'
import { Avatar } from '@mui/material'

function AvataLayout({src, name}) {
    return (
        <div className='imglayout-container'>
            <div className='imglayout-imglayout'>
                <Avatar className='imglayout-img' src={src} />
            </div>
            <div className='imglayout-text text-name'>
                {name}
            </div>
        </div>
      )
}

export default AvataLayout