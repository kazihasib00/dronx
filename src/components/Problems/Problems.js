import * as React from 'react'

import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import styles from './Problems.module.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const Problems = () => {
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Major Problems in Urban Areas</div>

      <Box
        sx={{
          bgcolor: 'background.paper',
          width: '100%',
          marginTop: '2rem',
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Traffic Jam" {...a11yProps(0)} />
            <Tab label="Unplanned Urban Area" {...a11yProps(1)} />
            <Tab label="Hazard Surveillance" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{
            height: '100vh',
          }}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className={styles.image}>
              <img
                src="/image/traffic.jpg"
                alt="Traffic jam"
                width={800}
                height={500}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className={styles.image}>
              <img
                src="/image/urban.jpg"
                alt="Flood"
                width={800}
                height={500}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className={styles.image}>
              <img
                src="/image/flood.jpg"
                alt="Flood"
                width={800}
                height={500}
              />
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  )
}

export default Problems
