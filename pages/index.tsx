import { GetServerSideProps } from 'next';

const Home = (): JSX.Element => {
  return <div className="w-96 mx-auto">I AM YOUR MAIN</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;
