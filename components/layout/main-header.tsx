import Link from "next/link";
import { FC } from "react";
import classes from "./main-header.module.css";

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
