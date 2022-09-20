import Navbar, { NavbarProps } from "../Navbar";

type NavbarWithButtonProps = Pick<NavbarProps, "title"> & {
  readonly text: string;
  readonly onClick: () => void;
};

export default function NavbarWithButton(props: NavbarWithButtonProps) {
  const { title, text, onClick } = props;

  return (
    <Navbar title={title}>
      <button onClick={onClick}>{text}</button>
    </Navbar>
  );
}
