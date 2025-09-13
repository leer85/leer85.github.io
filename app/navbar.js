'use client';
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
   <nav className={styles.navigation}>
      <ul>
        <li><a className="navLink" href="mailto:hej@leerichardson.dk">Email</a></li>
        <li><a className="navLink" href="https://www.linkedin.com/in/leerichardsondk">LinkedIn</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;