import React from 'react';
import '../MainPage.css'
import { Box, Typography, Avatar, TextField, Grid, IconButton, Button, Divider, Modal, Select, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/GifBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
};

const CreatePost = ({ open, handleCloseModal }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [postVisibility, setPostVisibility] = React.useState('public');

    const handleChooseImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
            setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
        };
        input.click();
    };

    const handleClose = () => {
        handleCloseModal(); // Đóng modal
        setSelectedImage(null); // Xóa ảnh
    };
      
    const handleSelectChange = (event) => {
        setPostVisibility(event.target.value);
    };      

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="create-post-title" aria-describedby="create-post-description">
        <Box sx={style} className='create-post-box'>
            <Grid container justifyContent="space-between" alignItems="center" mb={2} className='create-post-grid-header'>
            <Typography variant="h6" id="create-post-title">Create post</Typography>
            <IconButton onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            </Grid>
            <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <Avatar/>
                </Grid>
                <Grid item xs>
                    <Typography className='createpost-name-user' variant="subtitle1" fontWeight="bold">Hoài Nam</Typography>
                    <Select className='createpost-select' value={postVisibility} onChange={handleSelectChange}>
                        <MenuItem value="public" style={{padding: "0 0 0 16px" }}>public</MenuItem>
                        <MenuItem value="private" style={{padding: "0 0 0 16px" }}>private</MenuItem>
                    </Select>                
                </Grid>

            </Grid>
            <TextField fullWidth variant="outlined" placeholder="What's on your mind ?" multiline rows={4} sx={{ margin: '16px 0', borderRadius: '10px', fontSize: '18'}}/>
            {selectedImage && (
                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', marginBottom: 10}} />
            )}
            <Grid container justifyContent="space-between" alignItems="center">
                <Button startIcon={<PhotoCameraIcon />} style={{ textTransform: 'none', color: '#45bd62' }} onClick={handleChooseImage}>Photo/Video</Button>
                <Button startIcon={<EmojiEmotionsIcon />} style={{ textTransform: 'none', color: '#f7b928' }}>Feeling/Activity</Button>
                <Button startIcon={<GifIcon />} style={{ textTransform: 'none', color: '#0ba5ff' }}>GIF</Button>
            </Grid>
            <Divider sx={{ margin: '16px 0' }} />
            <Button variant="contained" color="primary" fullWidth>
            Post
            </Button>
        </Box>
        </Modal>
    );
};

export default CreatePost;
