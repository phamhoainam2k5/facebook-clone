import React from 'react'
import ImageLayout from '../ImageLayout/ImageLayout'
import avatar from '../../../public/images/dp0.png'
import group from '../../../public/images/groups.png'
import memories from '../../../public/images/memories.png'
import saved from '../../../public/saved.svg'
import groups from '../../../public/groups.png'
import video from '../../../public/watch.png'
import marketplace from '../../../public/marketplace.png'
import feeds from '../../../public/feed.png'
import event from '../../../public/event.png'
import adsmanager from '../../../public/images/admanager.png'

function LeftSide() {
  return (
    <div className='left-side'>
        <ImageLayout src={avatar} text="Hoài Nam" />
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