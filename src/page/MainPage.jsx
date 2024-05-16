import React from 'react'
import './MainPage.css'
import { Grid } from '@mui/material'
import LeftSide from './LeftSide/LeftSide'
import UploadSection from './UploadSection/UploadSection'

function MainPage() {
  return (
    <div className='mainpage-container'>
        <Grid container>
            <Grid item xs={3}>
                <LeftSide />
            </Grid>
            <Grid item xs={6}>
                <UploadSection/>
            </Grid>
            <Grid item xs={3}>
                Right
            </Grid>
        </Grid>
    </div>
  )
}

export default MainPage