import React from 'react'
import '../MainPage.css'
import ImageLayout from '../LayoutLeftRight/ImageLayout'
import group from '/images/groups.png'
import memories from '/images/memories.png'
import saved from '/saved.svg'
import groups from '/groups.png'
import video from '/watch.png'
import marketplace from '/marketplace.png'
import feeds from '/feed.png'
import event from '/event.png'
import adsmanager from '/images/admanager.png'
import AvataLayout from '../LayoutLeftRight/AvataLayout'

function LeftSide() {
  return (
    <div className='left-side'>
        <AvataLayout name="Hoài Nam" />
        <ImageLayout src={group} text="Find friends"/>
        <ImageLayout src={memories} text="Memories" />
        <ImageLayout src={saved} text="Saved" />
        <ImageLayout src={groups} text="Groups" />
        <ImageLayout src={video} text="Video" />
        <ImageLayout src={marketplace} text="Marketplace" />
        <ImageLayout src={feeds} text="Feeds" />
        <ImageLayout src={event} text="Event" />
        <ImageLayout src={adsmanager} text="Ads Manager" />
    </div>
  )
}

export default LeftSide