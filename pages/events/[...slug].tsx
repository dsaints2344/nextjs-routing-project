import { useRouter } from "next/router";
import { FC } from "react";
import { getFilteredEvents } from "../api/dummy-data";
import EventList from "../../components/events/event-list";

const FilteredEventsPage: FC = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  const filteredYear = filteredData ? filteredData[0] : "";
  const filteredMoth = filteredData ? filteredData[1] : "";
  const numYear = +filteredYear;
  const numMonth = +filteredMoth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust values</p>;
  }

  const filteredEvents = getFilteredEvents(new Date(numYear, numMonth - 1));
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }
  return (
    <div>
      {filteredData ? (
        <EventList events={filteredEvents} />
      ) : (
        <p className="center">Loading...</p>
      )}
    </div>
  );
};

export default FilteredEventsPage;
