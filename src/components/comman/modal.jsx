import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({open, isClose, title, children}) {

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={isClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{margin: "20px"}}>
          <Typography variant='h6'>{title}</Typography>
          {
            children
          }
        </Box>
        <DialogActions>
          <Button onClick={isClose}>Cancel</Button>
          <Button onClick={isClose}>ADD</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
