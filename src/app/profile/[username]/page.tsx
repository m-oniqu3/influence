import ProfileBar from "@/app/components/profile/ProfileBar";
import ProfileHeader from "@/app/components/profile/ProfileHeader";

type Props = {
  params: {
    username: string;
  };
};

async function ProfilePage({ params }: Props) {
  const { username } = await params;
  return (
    <div>
      <ProfileBar username={username} />
      <ProfileHeader />
    </div>
  );
}

export default ProfilePage;
