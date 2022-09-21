import { ReactNode } from "react";

type ButtonSize = "sm" | "md" | "xl";

export type ButtonProps = {
  readonly color: string;
  readonly size: ButtonSize;
  readonly children: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { size, color, children } = props;

  const buttonStyle = {
    color,
    fontSize: size === "xl" ? "32px" : "16px",
  };

  return <button style={buttonStyle}>{children}</button>;
}
