import {
  CreateIcon,
  ExploreIcon,
  HeartIcon,
  HomeIcon,
  LogoIcon,
  SearchIcon,
  UserIcon,
} from "@/app/components/icons";
import SidebarItem from "@/app/components/SidebarItem";

function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-16 h-screen border-r border-slate-50 py-5 px-2 md:w-56">
      <p className="flex items-center justify-center w-full md:justify-start md:px-3">
        <LogoIcon />
      </p>

      <div className="h-full w-full flex flex-col items-center justify-center  md:items-start">
        <div className="flex flex-col gap-6 w-full ">
          <SidebarItem icon={<HomeIcon />} label="Home" />
          <SidebarItem icon={<SearchIcon />} label="Search" />
          <SidebarItem icon={<ExploreIcon />} label="Explore" />
          <SidebarItem icon={<HeartIcon />} label="Notifications" />
          <SidebarItem icon={<CreateIcon />} label="Create" />
          <SidebarItem icon={<UserIcon />} label="Profile" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
