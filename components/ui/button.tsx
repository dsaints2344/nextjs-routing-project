import Link from "next/link";
import { FC, ReactNode } from "react";
import classes from "./button.module.css";

interface Props {
  children?: ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ children, link, onClick }) => {
  return (
    <>
      {link ? (
        <Link href={link} className={classes.btn}>
          {children}
        </Link>
      ) : (
        <button className={classes.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
