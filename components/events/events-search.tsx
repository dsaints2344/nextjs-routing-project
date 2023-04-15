import { FC } from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";

const EventsSearch: FC = () => {
  const months = [
    { name: "January", calendarNumber: 1 },
    { name: "February", calendarNumber: 2 },
    { name: "March", calendarNumber: 3 },
    { name: "April", calendarNumber: 4 },
    { name: "May", calendarNumber: 5 },
    { name: "June", calendarNumber: 6 },
    { name: "July", calendarNumber: 7 },
    { name: "August", calendarNumber: 8 },
    { name: "September", calendarNumber: 9 },
    { name: "October", calendarNumber: 10 },
    { name: "November", calendarNumber: 11 },
    { name: "December", calendarNumber: 12 },
  ];

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {months.map((month, key) => {
              return (
                <option value={month.calendarNumber} key={key}>
                  {month.name}
                </option>
              );
            })}
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};

export default EventsSearch;
