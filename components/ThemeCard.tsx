'use client';

import Image from 'next/image';
import styles from '@/styles/ThemeCard.module.css';
import React from 'react';

interface ThemeCardProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme : string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={styles.container}>
      <Image src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={() => setTheme(theme)}>Set Color Theme</button>
      </div>
    </div>
  );
};

export default ThemeCard;