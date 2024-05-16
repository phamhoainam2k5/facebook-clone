import React from 'react'
import './UploadSection.css'
import { Paper, Avatar, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
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
                    <Link component={RouterLink} to="/create-post" underline="none">
                        <span className="upload-box">
                            What's on your mind ?
                        </span>
                    </Link>
                </div>
            </div>
        </Paper>
    </div>
  )
}

export default UploadSection