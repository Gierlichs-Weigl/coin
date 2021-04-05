import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { sampleEventsData } from 'utils/sample-events-data';

type Props = {
  event:
    | {
        id: number;
        name: string;
      }
    | undefined;
  errors: string;
};

const Event: NextPage<Props> = ({ event, errors }) => {
  if (errors) {
    return <div>{errors}</div>;
  }

  return <div>{event?.name}</div>;
};

export default Event;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleEventsData.map((event) => ({
    params: { id: event.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const event = sampleEventsData.find((data) => data.id === Number(id));
    return { props: { event }, revalidate: 1 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
