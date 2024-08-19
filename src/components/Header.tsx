'use client';
import styles from "@/css/page.module.css";
import Link from "next/link";

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>
          <Link href="/">Where is the world?</Link>
        </h1>
        <button className={styles.colorModeBtn} onClick={toggleDarkMode}>
          <span className={styles.colorModeIcon}>&#9790;</span>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};