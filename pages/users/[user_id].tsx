import { GetServerSideProps } from 'next';

interface Props {
  currentUserData?: { message: string };
  userID: string;
}

const UserProfile = ({ currentUserData, userID }: Props): JSX.Element => {
  console.log(currentUserData);

  return <div>{userID}</div>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const currentUser = await fetch(`http://localhost:3000/api/user/${params?.user_id}`);

  //Do we set types here aswell?
  const currentUserData = await currentUser.json();
  const userID = params?.user_id;

  return {
    props: { currentUserData, userID },
  };
};

export default UserProfile;
