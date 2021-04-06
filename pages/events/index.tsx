import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { sampleEventsData } from 'utils/sample-events-data';

interface Props {
  events: {
    id: number;
    name: string;
  }[];
}

const Events: NextPage<Props> = ({ events }) => {
  console.log('events', events);
  return (
    <>
      <h1 className="text-2xl mb-6">Events</h1>
      <ul>
        {events?.map((event) => (
          <li key={event.id} className="mb-4">
            <Link href={`/events/${event.id}`}>
              <a className="p-4 block bg-indigo-400 hover:bg-indigo-300">{event.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const events = sampleEventsData;
    return { props: { events }, revalidate: 1 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default Events;
