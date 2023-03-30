import Link from 'next/link';
import { FC, ReactNode } from 'react';
import classes from './button.module.css';

interface Props {
  children?: ReactNode;
  link: string;
}

const Button: FC<Props> = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
