import Profile from 'components/Profile';
import { GetServerSideProps } from 'next';
import { RandomUser } from '@/interfaces/index';
import Bio from 'components/Bio';
import Contact from 'components/Contact';

interface Props {
  currentUserData?: { message: string };
  userID: string;
  randomUserData: RandomUser;
}

const UserProfile: React.FC<Props> = ({ currentUserData, userID, randomUserData }): JSX.Element => {
  const loggedIn = true;
  return (
    <>
      <Profile randomUserData={randomUserData} />
      <Bio />
      {loggedIn && <Contact />}
      <br />
      <br />
      <div>
        {userID} {currentUserData?.message}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const currentUser = await fetch(`http://localhost:3000/api/user/${params?.user_id}`);

  //Do we set types here aswell?
  const currentUserData = await currentUser.json();
  const userID = params?.user_id;

  const randomUser = await fetch(`https://randomuser.me/api/`);
  const randomUserData = await randomUser.json();

  return {
    props: { currentUserData, userID, randomUserData },
  };
};

export default UserProfile;
