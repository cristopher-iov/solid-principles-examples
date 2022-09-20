import { ReactNode } from "react";

import styles from "./Navbar.module.css";

export type NavbarProps = {
  readonly title: string;
  readonly children: ReactNode;
};

export default function Navbar(props: NavbarProps) {
  const { title, children } = props;

  return (
    <nav className={styles.nav}>
      <h1>{title}</h1>

      {children}
    </nav>
  );
}
