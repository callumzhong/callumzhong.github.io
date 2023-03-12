import React from "react";
import clsx from "clsx";
import Navbar from "@theme/Navbar";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
export default function DocPageLayoutMain({
  hiddenSidebarContainer,
  children,
}) {
  const sidebar = useDocsSidebar();
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) &&
          styles.docMainContainerEnhanced,
      )}
    >
      <Navbar />
      <div
        className={clsx(
          "container padding-top--md padding-bottom--lg",
          styles.docItemWrapper,
          hiddenSidebarContainer &&
            styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>

      <script
        src="https://utteranc.es/client.js"
        repo="callumzhong/callumzhong.github.io"
        issueterm="pathname"
        theme="github-light"
        crossOrigin="anonymous"
        async
      ></script>
    </main>
  );
}