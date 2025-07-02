import ProfileBar from "@/app/components/profile/ProfileBar";
import ProfileHeader from "@/app/components/profile/ProfileHeader";
import ProfileHighlights from "@/app/components/profile/ProfileHighlights";

type Props = {
  params: {
    username: string;
  };
};

async function ProfilePage({ params }: Props) {
  const { username } = await params;
  return (
    <div className="grid gap-4">
      <div className="md:hidden">
        <ProfileBar username={username} />
      </div>
      <ProfileHeader />
      <ProfileHighlights />
    </div>
  );
}

export default ProfilePage;
