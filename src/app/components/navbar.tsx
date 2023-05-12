import Link from 'next/link';
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>My Website</div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link href="/" className={styles.navbarLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navbarLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navbarLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};