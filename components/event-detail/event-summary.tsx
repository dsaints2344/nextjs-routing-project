import { FC } from "react";
import classes from "./event-summary.module.css";

interface Props {
  title: string;
}

const EventSummary: FC<Props> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
