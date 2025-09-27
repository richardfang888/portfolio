import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FilesIcon from './icons/FilesIcon';
import ProjectIcon from './icons/ProjectIcon';
import ContactIcon from './icons/ContactIcon';
import GithubIcon from './icons/GithubIcon';
import ProfileIcon from './icons/ProfileIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: ProjectIcon,
    path: '/projects',
  },
  {
    Icon: GithubIcon,
    path: '/experience',
  },
  {
    Icon: ContactIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: ProfileIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                currentPath === path && styles.active
              }`}
            >
              <Icon
                fill={
                  currentPath === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBot}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                currentPath === path && styles.active
              }`}
            >
              <Icon
                fill={
                  currentPath === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
