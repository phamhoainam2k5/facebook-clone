import React from 'react'
import './MainPage.css'
import { Grid } from '@mui/material'
import LeftSide from './LeftSide/LeftSide'
import UploadSection from './UploadSection/UploadSection'
import Post from './PostContainer/Post'
import RightSide from './RightSide/RightSide'

function MainPage() {
  return (
    <div className='mainpage-container'>
        <Grid container>
            <Grid item xs={3} className='leftContainer'>
                <LeftSide />
            </Grid>
            <Grid item xs={6} className='middleContainer'>
                <UploadSection />
                <Post />
            </Grid>
            <Grid item xs={3} className='rightContainer'>
                <RightSide />
            </Grid>
        </Grid>
    </div>
  )
}

export default MainPage