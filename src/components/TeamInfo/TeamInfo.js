import styles from './TeamInfo.module.css'

const TeamInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>INCEPTION_OK</div>

      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/image/team.png'})`,
          height: '100vh',
          width: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          marginTop: '3rem',
        }}
      ></div>
    </div>
  )
}

export default TeamInfo
