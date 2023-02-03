import Link from 'next/link';
import { FC } from 'react';
import { IEvent } from '../../types/events';
import classess from '../../styles/event-item.module.css';

const EventItem: FC<IEvent> = (props) => {
    const { id, title, description, location, date, image, isFeatured } = props;
    const readableDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`
    return (
        <li className={classess.item}>
            <img src={"/" + image} alt={title} />
            <div className={classess.content}>
                <div className={classess.summary}>
                    <h2>{title}</h2>
                    <div className={classess.date}>
                        <time>{readableDate}</time>
                    </div>
                    <div className={classess.address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className={classess.actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItem;