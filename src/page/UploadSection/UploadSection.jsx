import React from 'react'
import './UploadSection.css'
import { Paper, Avatar } from '@mui/material'

function UploadSection() {
  return (
    <div>
        <Paper className='upload-container' />
        <div>
            <div>
                <Avatar className='upload-img' />
            </div>
            <div>
                <input type="text" className="upload-box" />
            </div>
        </div>
    </div>
  )
}

export default UploadSection