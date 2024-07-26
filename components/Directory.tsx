'use client'

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Chevron from './icons/Chevron';
import styles from '../styles/Directory.module.css';

const directoryItemsTop = [
  {
    name: 'Home.jsx',
    path: '/',
    icon: 'react_icon.svg',
  },
  {
    name: 'About.html',
    path: '/about',
    icon: 'html_icon.svg',
  },
];

const directoryItemsBot = [
  {
    name: 'Experience.css',
    path: '/experience',
    icon: 'css_icon.svg',
  },
  {
    name: 'Contact.md',
    path: '/contact',
    icon: 'markdown_icon.svg',
  },
];

const projectItems = [
  {
    name: 'project_list.js',
    path: '/projects',
    icon: 'js_icon.svg',
  },
  {
    name: 'video_call.js',
    path: '/projects/video_call',
    icon: 'js_icon.svg',
  },
  {
    name: 'soccer_analysis.js',
    path: '/projects/soccer_analysis',
    icon: 'js_icon.svg',
  },
  {
    name: 'spotify_ai.js',
    path: '/projects/spotify_ai',
    icon: 'js_icon.svg',
  },
];

const Directory = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(true);

  return (
    <div className={styles.directory}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <Chevron
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {directoryItemsTop.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
          <div>
            <input
              type="checkbox"
              className={`${styles.checkbox} ${styles.projectHeading}`}
              id="projects-checkbox"
              checked={projectsOpen}
              onChange={() => setProjectsOpen(!projectsOpen)}
            />
            <label htmlFor="projects-checkbox" className={`${styles.file} ${styles.projectHeading}`}>
              <Chevron
                className={styles.chevron}
                style={projectsOpen ? { transform: 'rotate(90deg)' } : {}}
              />
               Projects
            </label>
            <div
              className={`${styles.file} ${styles.projectHeading}`}
              style={projectsOpen ? { display: 'block' } : { display: 'none' }}
            >
              {projectItems.map((item) => (
                <Link href={item.path} key={item.name}>
                  <div className={`${styles.file} ${styles.projectItem}`}>
                    <Image
                      src={`/${item.icon}`}
                      alt={item.name}
                      height={18}
                      width={18}
                    />{' '}
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {directoryItemsBot.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image
                  src={`/${item.icon}`}
                  alt={item.name}
                  height={18}
                  width={18}
                />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directory;