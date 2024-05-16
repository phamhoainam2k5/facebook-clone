import React from 'react'
import './MainPage.css'
import { Grid } from '@mui/material'
import LeftSide from './LeftSide/LeftSide'

function MainPage() {
  return (
    <div className='mainpage-container'>
        <Grid container>
            <Grid item xs={3}>
                <LeftSide />
            </Grid>
            <Grid item xs={3}>
                Middle
            </Grid>
            <Grid item xs={3}>
                Right
            </Grid>
        </Grid>
    </div>
  )
}

export default MainPage