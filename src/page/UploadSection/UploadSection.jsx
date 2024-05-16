import React from 'react'
import './UploadSection.css'
import { Paper, Avatar } from '@mui/material'
import live from '../../../public/images/video.png';
import image from '../../../public/images/image.png'
import feeling from '../../../public/images/feelings.png';

function UploadSection() {
  return (
    <div>
        <Paper className='upload-container'>
            <div className='upload-top'>
                <div>
                    <Avatar className='upload-img' />
                </div>
                <div>
                    <input type="text" className="upload-box" placeholder="What's on your mind?"/>
                </div>
            </div>
            <div className='upload-bottom'>
                <div className='upload-tabs'>
                    <img src={live} width={35} />
                    <div className='upload-text'>Live Video</div>
                </div>
                <div className='upload-tabs'>
                    <img src={image} width={35} />
                    <div className='upload-text'>Photo/Video</div>
                </div>
                <div className='upload-tabs'>
                    <img src={feeling} width={35} />
                    <div className='upload-text'>Feeling/activity</div>
                </div>
            </div>
        </Paper>
    </div>
  )
}

export default UploadSection