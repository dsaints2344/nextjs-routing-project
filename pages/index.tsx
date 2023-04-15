import { FC } from "react";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "./api/dummy-data";
import EventsSearch from "../components/events/events-search";
import { useRouter } from "next/router";

const HomePage: FC = () => {
  const featuredEvents = getFeaturedEvents();
  const router = useRouter();
  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={featuredEvents} />
    </>
  );
};

export default HomePage;
