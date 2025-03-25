import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const EmailModal = () => {
  return (
    <Dialog>
        <DialogTitle>
            Send Email
        </DialogTitle>
        <DialogContent>
            <TextField placeholder='Enter recepient email' />
            <TextField placeholder='Enter subject' />
        </DialogContent>
        <DialogActions>
            <Button>Send</Button>
            <Button>Cancel</Button>
        </DialogActions>
    </Dialog>
  )
}

export default EmailModal