import React, { useState } from 'react';
import './UploadSection.css'
import { Paper, Avatar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CreatePost from '../CreatePostContainer/CreatePost'

function UploadSection() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
      
    return (
        <div>
          <Paper className='upload-container'>
            <div className='upload-top'>
              <div>
                <Avatar className='upload-img' />
              </div>
              <div>
                <Link component={RouterLink} underline="none" onClick={handleOpen}>
                    <span className="upload-box">
                        What's on your mind?
                    </span>
                </Link>
              </div>
            </div>
          </Paper>
          <CreatePost open={open} handleCloseModal={handleCloseModal}/>
        </div>
    );
}

export default UploadSection