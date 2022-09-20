import styles from "./Navbar.module.css";

type NavbarType = "default" | "withLinkButton" | "withNormalButton";

type NavbarProps = {
  readonly title: string;
  readonly type: NavbarType;
  readonly href?: string;
  readonly text?: string;
  readonly onClick?: () => void;
};

export default function Navbar(props: NavbarProps) {
  const { title, type, href, text, onClick } = props;

  return (
    <nav className={styles.nav}>
      <h1>{title}</h1>

      {type === "withLinkButton" && <a href={href}>{text}</a>}

      {type === "withNormalButton" && <button onClick={onClick}>{text}</button>}
    </nav>
  );
}
