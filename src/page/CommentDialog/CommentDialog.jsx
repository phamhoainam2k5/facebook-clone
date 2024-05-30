import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, List, ListItem, ListItemAvatar, ListItemText, IconButton, Button, Avatar, Typography, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const CommentDialog = ({ open, handleClose, comments, addComment }) => (
  <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
    <DialogTitle>
      Comments
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <List>
        {comments.map((comment, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{comment.avatar}</Avatar>
            </ListItemAvatar>
            <Box
              sx={{
                backgroundColor: '#e0e0e0', // Màu nền xám nhạt
                borderRadius: '5px', // Bo tròn các góc
                padding: '8px', // Khoảng cách bên trong
                display: 'inline-block', // Chiều dài tùy thuộc vào nội dung
              }}
            >
                <ListItemText
                primary={<Typography variant="body1" fontWeight="bold">{comment.user}</Typography>}
                secondary={comment.text}
                />
            </Box>
          </ListItem>
        ))}
      </List>
      <TextField
        autoFocus
        margin="dense"
        label="Add a comment"
        fullWidth
        variant="outlined"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addComment(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </DialogContent>
  </Dialog>
);

export default CommentDialog;
