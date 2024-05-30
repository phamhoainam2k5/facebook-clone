import React, { useState } from 'react'
import './PostContainer.css'
import CommentDialog from '../CommentDialog/CommentDialog'
import { Paper, Avatar } from '@mui/material'
import post from '../../../public/images/pic1.jpeg'
import like from '../../../public/images/like.png'
import unlikebutton from '../../../public/icons8-facebook-like-48.png'
import likebutton from '../../../public/icons8-like-48.png'
import comment from '../../../public/icons8-comment-48.png'
import share from '../../../public/icons8-share-48.png'
import ellipsis from '../../../public/ellipsis.svg'

function PostContainer() {

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(25);
    const [open, setOpen] = useState(false);
    const [comments, setComments] = useState([
        { text: "This is a comment.", avatar: "", user: "Alice" },
        { text: "Here is another comment.", avatar: "", user: "Bob" }
    ]);

    const handleLikeClick = () => {
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setLiked(!liked);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addComment = (text) => {
        const newComment = { text, avatar: "", user: "Hoài Nam" }; // Tạo tên người dùng giả
        setComments([...comments, newComment]);
    };
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
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
                    <div className='post-ellipsis'>
                        <img src={ellipsis} style={{height: '20px', width: '20px'}}/>
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
                        {likeCount}
                    </div>
                </div>
                {/* like comment share box */}
                <div className='post-likebutton'>
                    <button className="post-tab" onClick={handleLikeClick}>
                        <div className="post-tabfirst">
                            <img src={liked ? unlikebutton : likebutton} className='post-tabimg'/>
                        </div>
                        <div className='post-tabtext' style={{ color: liked ? 'blue' : '#686868' }}>
                            Like
                        </div>
                    </button>
                    <button className="post-tab" onClick={handleOpen}>
                        <div className="post-tabfirst">
                            <img src={comment} className='post-tabimg' />
                        </div>
                        <div className='post-tabtext'>
                            Comment
                        </div>
                    </button>
                    
                    <button className="post-tab">
                        <div className="post-tabfirst">
                            <img src={share} className='post-tabimg'/>
                        </div>
                        <div className='post-tabtext'>
                            Share
                        </div>
                    </button>
                </div>
                {/* comment box */}
                <div className='comment-box'>
                    <CommentDialog open={open} handleClose={handleClose} comments={comments} addComment={addComment} />
                </div>
                
            </Paper>
        </div>
    )
}

export default PostContainer