import Button, { ButtonProps } from "../Button";

type ButtonRedProps = Pick<ButtonProps, "children"> & {
  readonly isBig?: boolean;
};

export default function ButtonRed(props: ButtonRedProps) {
  const { isBig, children } = props;

  return (
    <Button color="red" size={isBig ? "xl" : "sm"}>
      {children}
    </Button>
  );
}
