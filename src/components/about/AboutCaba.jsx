import React from 'react'
import { Box } from '@material-ui/core';
import { info } from '../utilities/Info'
import styles from './about.module.css'

const AboutCaba = () => {
  return (
    <div className={styles.about}>
      <br />
      <br />
      <div className={styles.center}>
        {info.firtsName}{info.lastName} $ cat about {info.firtsName} 
      </div>
    </div>
  )
}

export default AboutCaba
