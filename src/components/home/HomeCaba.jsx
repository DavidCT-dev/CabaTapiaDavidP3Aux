import React, {useContext} from 'react'
import styles from './Home.module.css'
import { info } from '../utilities/Info'

import {dataContext} from '../useContext/useContext'
 


const HomeCaba = () => {
  const {data} =useContext(dataContext)
  return (
    <div className={styles.center}>
      <div className={styles.div1}>
        <img className={styles.img} 
          src={data.img} alt="myImage" />
      </div>
      <div>
        <h1>Hi, I'm<b className={styles.color}>{` ${data.name}`}</b>
        </h1>
        <h2>I'm {info.position}</h2>
          {
          info.miniBio.map( (info, key) => (
          <li key={key}>{info.emoji} {info.text}</li>
          ))}
        
       
      </div>
    </div>
  )
}

export default HomeCaba
