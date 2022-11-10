import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "../styles/navbar.module.scss"
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

  return (
    <div className={`${styles.navbarContainer} ${expandNavbar ? styles.open : styles.close}`}>
      <div className={styles.navbarToggleButtonContainer}>
        <button onClick={() => setExpandNavbar(prev => !prev)}><GiHamburgerMenu size={32} /></button>
      </div>
      <div className={styles.navbarLinksContainer}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </div>
  )
}

export default Navbar