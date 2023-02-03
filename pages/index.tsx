import { FC } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from './api/dummy-data';
 
const HomePage: FC = () => {
    const featuredEvents = getFeaturedEvents();

    return <ul>
        <EventList events={featuredEvents}/>
    </ul>
}

export default HomePage;