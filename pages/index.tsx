import { FC } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "./api/dummy-data";
import EventsSearch from "../components/events/events-search";

const HomePage: FC = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={featuredEvents} />
    </>
  );
};

export default HomePage;
