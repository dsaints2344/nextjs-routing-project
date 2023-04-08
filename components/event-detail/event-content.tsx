import { FC, ReactNode } from "react";
import classes from "./event-content.module.css";

interface Props {
  children?: ReactNode;
}

const EventContent: FC<Props> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
