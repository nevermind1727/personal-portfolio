import React from 'react'
import {BsGithub, BsLinkedin, BsTelegram} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import styles from "../styles/footer.module.scss"

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerIconsContainer}>
        <BsGithub />
        <BsTelegram />
        <SiGmail />
        <BsLinkedin />
      </div>
      <p>&copy; 2022 Dmitry Taran</p>
    </div>
  )
}

export default Footer