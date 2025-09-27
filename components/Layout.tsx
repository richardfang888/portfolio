'use client';

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Tabsbar from "./Tabsbar";
import Directory from "./Directory";
import styles from '@/styles/Layout.module.css';
import "@/styles/themes.css";


const Layout = ({ children } : { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main-editor");
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  return (
    <div className={styles.main}>
      <Sidebar />
      <Directory />
      <div style={{ width: "100%" }}>
        <Tabsbar />
        <main id="main-editor" className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
