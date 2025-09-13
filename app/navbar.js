'use client';
import styles from './navbar.module.css'; 

const Navbar = () => {
  return (
   <nav className={styles.navigation}>
      <ul>
        <li><a className="navLink" href="mailto:hej@leerichardson.dk">Email</a></li>
        <li><a className="navLink" href="http://www.linkedin.com/in/lee-richardson-ux-designer">LinkedIn</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;