import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { getEventById } from '../api/dummy-data';

const EventDetailsPage: FC = () => {
  const router = useRouter();

  const eventId = Array.isArray(router.query.eventId)
    ? router.query.eventId.join('')
    : router.query.eventId;
  if (eventId) {
    const event = getEventById(eventId);
    if (event) {
      return <p>Event not found</p>;
    }
  }

  return <div>Event details page</div>;
};

export default EventDetailsPage;
