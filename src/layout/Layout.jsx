import styles from "./styles/Layout.module.css";

import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Developed By Amirali | Please Check my{" "}
          <a href="https://github.com/amirali-98">Github</a> account ❤️
        </p>
      </footer>
    </>
  );
}
