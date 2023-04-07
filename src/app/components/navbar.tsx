import Link from 'next/link';
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar-logo}>My Website</div>
      <ul className={styles.navbar-links}>
        <li>
          <Link href="/" className={styles.navbar-link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navbar-link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navbar-link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};