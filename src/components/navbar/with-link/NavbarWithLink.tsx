import Navbar, { NavbarProps } from "../Navbar";

type NavbarWithLinkProps = Pick<NavbarProps, "title"> & {
  readonly href: string;
  readonly text: string;
};

export default function NavbarWithLink(props: NavbarWithLinkProps) {
  const { title, href, text } = props;

  return (
    <Navbar title={title}>
      <a href={href}>{text}</a>
    </Navbar>
  );
}
