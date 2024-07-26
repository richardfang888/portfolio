import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import ProjectIcon from './icons/ProjectIcon';
import ContactIcon from './icons/ContactIcon';
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
    path: '/github',
  },
  {
    Icon: ContactIcon,
    path: '/contact',
  },
];

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                segment === path && styles.active
              }`}
            >
              <Icon
                fill={
                  segment === path
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
