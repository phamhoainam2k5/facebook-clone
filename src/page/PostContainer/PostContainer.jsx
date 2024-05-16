import React from 'react'
import './PostContainer.css'
import { Paper, Avatar } from '@mui/material'
import post from '../../../public/images/pic1.jpeg'
import like from '../../../public/images/like.png'
import likebutton from '../../../public/images/likebutton.png'
import comment from '../../../public/images/comment.png'
import share from '../../../public/images/share.png'

function PostContainer() {
  return (
    <div>
        <Paper className='post-container'>
            {/* header */}
            <div className='post-header'>
                <div className='post-avatar'>
                    <Avatar  />
                </div>
                <div className='post-name'>
                    <p>Hoài Nam</p>
                    <div className='post-time'>
                        2 day ago.
                    </div>
                </div>
            </div>
            {/* content */}
            <div className='post-content'>
                Look this wallpaper ...
            </div>
            {/* images */}
            <div className='post-img'>
                <img src={post} width={690}/>
            </div>
            {/* like count */}
            <div className='post-likecount-container'>
                <div className='post-like'>
                    <img src={like} className='post-img-like' />
                </div>
                <div className="post-likecount">
                    25
                </div>
            </div>
            {/* like comment share box */}
            <div className='post-likebutton'>
                <div className="post-tab">
                    <div className="post-tabfirst">
                        <img src={likebutton} className='post-tabimg'/>
                    </div>
                    <div className='post-tabtext'>
                        <p>Like</p>
                    </div>
                </div>
                <div className="post-tab">
                    <div className="post-tabfirst">
                        <img src={comment} className='post-tabimg'/>
                    </div>
                    <div className='post-tabtext'>
                        <p>Comment</p>
                    </div>
                </div>
                <div className="post-tab">
                    <div className="post-tabfirst">
                        <img src={share} className='post-tabimg'/>
                    </div>
                    <div className='post-tabtext'>
                        <p>Share</p>
                    </div>
                </div>
            </div>
            {/* comment box */}
            <div></div>
        </Paper>
    </div>
  )
}

export default PostContainer