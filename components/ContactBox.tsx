import styles from '@/styles/ContactBox.module.css';
import React from 'react'

const contactItems = [
  {
    social: 'website',
    link: 'richardfang.vercel.app',
    href: 'https://richardfang.vercel.app',
  },
  {
    social: 'email',
    link: 'richardfang888@gmail.com',
    href: 'mailto:richardfang888@gmail.com',
  },
  {
    social: 'github',
    link: 'richardfang888',
    href: 'https://github.com/richardfang888',
  },
  {
    social: 'linkedin',
    link: 'Richard Fang',
    href: 'http://linkedin.com/in/richard-fang-6a2553262',
  },
];

const ContactBox = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactBox;