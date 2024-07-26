'use client';

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Directory from "./Directory";
import styles from '@/styles/Layout.module.css';

const Layout = ({ children } : { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main-editor");
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <Directory />
        <div style={{ width: "100%" }}>
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
