import React, { useState, useEffect } from 'react'
import './HeaderPage.css'
import { Grid, Avatar } from '@mui/material'

function Home() {
    return (
        <div>
            <Grid container className='navbar-main'>
                <Grid item xs ={12} md={3} className='navbar-left-container'>
                    <div className='navbar-leftbar'>
                        <img className='navbar-logo' src="../public/facebook.svg" />
                        <div className="navbar-search-container">
                            <span className="navbar-search-logo" id="searchIcon">
                                <img src="../public/search.svg" width={20}/>
                            </span>
                            <input className="navbar-search" type="text" placeholder="Search Facebook" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='navbar-middle-container'>
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
                <Grid item xs={12} md={3} className='navbar-right-'>
                    <div className='navbar-rightbar'>
                        <div className="navbar-right-tab">
                            <Avatar className='navbar-right-img' src='../public/images/dp0.svg'></Avatar>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home