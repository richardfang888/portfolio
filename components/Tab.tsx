'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/Tab.module.css';

interface TabProps {
    icon: string;
    filename: string;
    path: string;
    onClose: (path: string) => void;
  }
  
const Tab: React.FC<TabProps> = ({ icon, filename, path, onClose }) => {
  const pathname = usePathname();

  return (
    <div className={`${styles.tabContainer} ${pathname === path && styles.active}`}>
      <Link href={path} className={styles.link}>
        <div className={styles.tab}>
          <Image src={icon} alt={filename} height={18} width={18} />
          <p>{filename}</p>
        </div>
      </Link>
      <button className={styles.closeButton} onClick={() => onClose(path)}>✖</button>
    </div>
  );
};

export default Tab;
