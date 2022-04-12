import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  return (
    <nav className={[styles.navbar].join(' ')}>
        <div className={[styles.navbarLeft].join(' ')}>
            logo
        </div>
        <div className={[styles.navbarRight].join(' ')}>

        </div>
    </nav>
  )
}

export default Navbar