import React from 'react'
import './HeaderPage.css'
import { Grid, Avatar } from '@mui/material'

function Home() {
  return (
    <div>
        <Grid container className='navbar-main'>
            <Grid item xs ={3}>
                <div className='navbar-leftbar'>
                    <img className='navbar-logo' src="../public/facebook.svg" width={40}/>
                    <input className='navbar-search' type="text" placeholder='Search Facebook'/>
                </div>
            </Grid>
            <Grid item xs ={6}>
                <div className='navbar-container'>
                    <div className='navbar-tabs active'>
                        <img src="../public/images/home.svg" width={35} height={35}/>
                    </div>
                    <div className='navbar-tabs'>
                        <img src="../public/images/pages.svg" width={35} height={35}/>
                    </div>
                    <div className='navbar-tabs'>
                        <img src="../public/images/watch.svg" width={35} height={35}/>
                    </div>
                    <div className='navbar-tabs'>
                        <img src="../public/images/market.svg" width={35} height={35}/>
                    </div>
                    <div className='navbar-tabs'>
                        <img src="../public/images/groups.svg" width={35} height={35}/>
                    </div>
                </div>
            </Grid>
            <Grid item xs ={3}>
                <div className='navbar-rightbar'>
                    <div className="navbar-right-tab">
                        <Avatar className='navbar-right-img' src='../public/images/dp0.svg'></Avatar>
                        <div className='navbar-profilename'>Nam</div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Home