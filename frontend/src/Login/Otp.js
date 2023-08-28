import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function Otp() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{height:'200px'}}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Sign In Here
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Get Touch With Us</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Please Enter Your Number To Get Otp
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mobile Number"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Link to="/OtpVerifi">
          <Button>Get Otp</Button>
          </Link>
         
        </DialogActions>
      </Dialog>
    </div>
      
    
  );
}