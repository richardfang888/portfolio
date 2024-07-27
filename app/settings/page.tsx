import ThemeCard from '@/components/ThemeCard';
import styles from '@/styles/Settings.module.css';
import React from 'react';

const SettingsPage = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeCard
          name="GitHub Dark"
          icon="/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeCard
          name="Dracula"
          icon="/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
        />
        <ThemeCard
          name="Ayu Mirage"
          icon="/ayu.png"
          publisher="teabyii"
          theme="ayu-mirage"
        />
        <ThemeCard
          name="Nord"
          icon="/nord.png"
          publisher="arcticicestudio"
          theme="nord"
        />
        <ThemeCard
          name="Night Owl"
          icon="/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
        />
      </div>
    </>
  );
};

export default SettingsPage;