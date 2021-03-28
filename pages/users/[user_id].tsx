import { GetServerSideProps } from 'next';

interface Props {
  currenUser?: any; // Check any
}

const UserProfile = (props: Props): JSX.Element => {
  console.log({ props });

  return <div>{/* <pre>{user_id}</pre> */}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const currentUser = await fetch(`http://localhost:3000/api/user/${params?.user_id}`);

  const currentUserData = await currentUser.json();

  return {
    props: { currentUserData }, // will be passed to the page component as props
  };
};

export default UserProfile;
