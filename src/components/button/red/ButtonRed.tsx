import Button, { ButtonProps } from "../Button";

type ButtonRedProps = Pick<ButtonProps, "children" | "size">;

export default function ButtonRed(props: ButtonRedProps) {
  const { size, children } = props;

  return (
    <Button color="red" size={size}>
      {children}
    </Button>
  );
}
