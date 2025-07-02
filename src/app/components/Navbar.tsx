import { HeartIcon, LogoIcon } from "@/app/components/icons";
import Searchbar from "@/app/components/Searchbar";

function Navbar() {
  return (
    <header className="border-b-[1px] border-slate-50 h-16 flex justify-center">
      <nav className="wrapper flex items-center justify-between gap-2 ">
        <LogoIcon />

        <Searchbar />

        <HeartIcon />
      </nav>
    </header>
  );
}

export default Navbar;
