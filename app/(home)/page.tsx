import React from 'react';
import Link from 'next/link';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Richard Fang</h1>
            <h6 className={styles.bio}>Software Engineer, Full Stack</h6>
            <Link href="/projects">
              <button className={styles.button}>Projects</button>
            </Link>
            <Link href="/experience">
              <button className={styles.outlined}>Experience</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}