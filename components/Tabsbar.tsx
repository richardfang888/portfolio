'use client';

import { useState, useEffect } from 'react';
import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';
import { usePathname, useRouter } from 'next/navigation';

const initialTabs = [
  { icon: '/react_icon.svg', filename: 'home.jsx', path: '/' },
  { icon: '/html_icon.svg', filename: 'about.html', path: '/about' },
  { icon: '/js_icon.svg', filename: 'projects.js', path: '/projects' },
  { icon: '/markdown_icon.svg', filename: 'experience.md', path: '/experience' },
  { icon: '/css_icon.svg', filename: 'contact.css', path: '/contact' },
];

const Tabsbar = () => {
  const [tabs, setTabs] = useState(initialTabs);
  const pathname = usePathname();
  const router = useRouter();

  // Effect to handle adding new tabs
  useEffect(() => {
    const addNewTab = () => {
      const isActiveTabInTabs = tabs.some(tab => tab.path === pathname);
      if (!isActiveTabInTabs) {
        const newTab = initialTabs.find(tab => tab.path === pathname);
        if (newTab) {
          setTabs(prevTabs => [...prevTabs, newTab]);
        }
      }
    };

    addNewTab();
  }, [pathname]);

  const handleClose = (path: string) => {
    setTabs(prevTabs => {
      const updatedTabs = prevTabs.filter(tab => tab.path !== path);
      
      if (updatedTabs.length === 0) {
        router.push('/blank');
        return updatedTabs;
      }

      // If the closed tab was the active tab, set the new active tab to the first one
      if (path === pathname) {
        const newActiveTab = updatedTabs[0];
        router.push(newActiveTab.path);
      }

      return updatedTabs;
    });
  };

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => (
        <Tab
          key={tab.path}
          icon={tab.icon}
          filename={tab.filename}
          path={tab.path}
          onClose={handleClose}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
