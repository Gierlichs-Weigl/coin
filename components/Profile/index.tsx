import { RandomUser } from '@/interfaces/index';
import Image from 'next/image';

interface Props {
  randomUserData: RandomUser;
}

const Profile: React.FC<Props> = ({ randomUserData }) => {
  const user = randomUserData.results[0];

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <div className="w-40 h-40 relative rounded-full overflow-hidden m-4">
        <Image src={user.picture.large} alt="Profile picture" layout="fill" objectFit="contain" />
      </div>
      <div className="text-3xl">
        {user.name.first} {user.name.last}
      </div>
    </div>
  );
};

export default Profile;
