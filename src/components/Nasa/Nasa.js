import styles from './Nasa.module.css'

const Nasa = () => {
  return (
    <div>
      <div className={styles.appbar}>
        <div className={styles.title}>DRONX</div>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://worldview.earthdata.nasa.gov/?v=-141.29835092135198,-57.54683404872471,140.8467397610516,72.39958038356832&e=true&efs=true&efd=2021-06-03,2021-10-01&t=2021-10-01-T21%3A14%3A16Z&em=true"
          role="application"
          sandbox="allow-modals allow-scripts allow-same-origin allow-forms allow-popups"
          width="100%"
          height="100%"
          allow="fullscreen; autoplay;"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Nasa
