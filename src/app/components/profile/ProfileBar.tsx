import { ArrowLeftIcon } from "@/app/components/icons";

type Props = {
  username: string;
};

function ProfileBar(props: Props) {
  const { username } = props;

  return (
    <header className="h-12 flex items-center border-b border-slate-50">
      <div className=" wrapper flex items-center justify-center  gap-2">
        <ArrowLeftIcon className="" />

        <p className="mx-auto font-semibold text-sm">{username}</p>
      </div>
    </header>
  );
}

export default ProfileBar;
