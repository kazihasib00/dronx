import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [location, setLocation] = React.useState('')

  const handleClick = () => {
    setOpen(true)
    setName('')
    setPhone('')
    setLocation('')
  }

  const handleName = e => {
    setName(e.target.value)
  }

  const handlePhone = e => {
    setPhone(e.target.value)
  }

  const handleLocation = e => {
    setLocation(e.target.value)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  return (
    <div>
      <div className={styles.appbar}>
        <div className={styles.title}>DRONX</div>
      </div>

      <div className={styles['personal-details']}>Personal Details</div>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            marginTop: '1rem',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            color="error"
            value={name}
            onChange={handleName}
          />
          <TextField
            id="filled-basic"
            label="Phone"
            variant="filled"
            color="error"
            value={phone}
            onChange={handlePhone}
          />
          <TextField
            id="filled-basic"
            label="Location"
            variant="filled"
            color="error"
            value={location}
            onChange={handleLocation}
          />
        </Box>

        <div className={styles.buttons}>
          <Button
            size="medium"
            color="error"
            variant="contained"
            onClick={handleClick}
          >
            Rescue
          </Button>
          <Button
            size="medium"
            color="error"
            variant="contained"
            onClick={handleClick}
          >
            Delivery
          </Button>
        </div>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Request sent."
          action={action}
        />
      </div>
    </div>
  )
}

export default Dashboard
