import React from 'react';
import styles from '@/styles/BlankPage.module.css';

const BlankPage = () => {
  return (
    <div className={styles.container}>
      <p>Click on the files to learn more about me</p>
      <p>Click on Settings to customize site theme</p>
      <p>F11 to toggle full screen</p>
    </div>
  );
}

export default BlankPage;
