import { SearchIcon } from "@/app/components/icons";

function Searchbar() {
  return (
    <div className="w-8/12 ">
      <form className="relative w-full mx-auto ">
        <div className="absolute left-2 top-2 z-10">
          <SearchIcon className="size-4" />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="bg-slate-50 w-full text-[0.8rem] h-8 rounded-md pl-8 px-2 focus:outline-none placeholder:text-[0.8rem]"
        />
      </form>
    </div>
  );
}

export default Searchbar;
