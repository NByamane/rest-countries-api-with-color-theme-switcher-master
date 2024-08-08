'use client';
import styles from "@/css/page.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export const Header = () => {
	//ColorModeの切り替えToggle
	const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isOn) {
      body.classList.add('darkMode');
    } else {
      body.classList.remove('darkMode');
    }
		//リセット
    return () => {
      body.classList.remove('darkMode');
    };
  }, [isOn]);

  const toggleClass = () => {
    setIsOn(prev => !prev);
  };

	return(
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<h1 className={styles.pageTitle}>
          <Link href="/">Where is the world?</Link>
        </h1>
				<button className={styles.colorModeBtn} onClick={toggleClass}>
					<span className={styles.colorModeIcon}>&#9790;</span>{isOn ? 'Light Mode' : 'Dark Mode'}
				</button>
			</div>
		</header>
	)
}