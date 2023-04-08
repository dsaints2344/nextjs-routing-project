import { useRouter } from "next/router";
import { FC, Fragment, useEffect } from "react";
import { getEventById } from "../api/dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailsPage: FC = () => {
  const router = useRouter();

  const eventId = Array.isArray(router.query.eventId)
    ? router.query.eventId.join("")
    : router.query.eventId;
  const event = getEventById(eventId!);

  return event ? (
    <Fragment>
      <EventSummary title={event!.title} />
      <EventLogistics
        date={event!.date}
        address={event!.location}
        image={event!.image}
        imageAlt={event!.title}
      />
      <EventContent>
        <p>{event!.description}</p>
      </EventContent>
    </Fragment>
  ) : (
    <p>Event not found</p>
  );
};

export default EventDetailsPage;
