import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp'
import IconButton from '@mui/material/IconButton'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.title}>
        Drones and Satellites for Urban Development
      </div>

      <div className={styles.backdrop}></div>

      <video autoPlay muted loop className={styles.video}>
        <source src="/media/header.mp4" type="video/mp4" />
      </video>

      <IconButton color="primary">
        <ArrowDownwardSharpIcon />
      </IconButton>
    </header>
  )
}

export default Header
