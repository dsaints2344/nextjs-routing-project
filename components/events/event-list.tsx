import { FC } from 'react';
import { IEvents } from '../../types/events';
import EventItem from './event-item';
import classes from '../../styles/event-list.module.css';


const EventList: FC<IEvents> = ({ events }) => {
    return (
        <ul className={classes.list}>
            {
                events.map(event => <EventItem key={event.id} {...event} />)
            }
        </ul>
    )
}

export default EventList;