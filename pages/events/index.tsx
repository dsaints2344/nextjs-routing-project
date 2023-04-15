import { FC } from "react";
import { getAllEvents } from "../api/dummy-data";
import EventList from "../../components/events/event-list";

const EventsPage: FC = () => {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default EventsPage;
