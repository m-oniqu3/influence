// type Props = {};
"use client";
import Button from "@/app/components/Button";
import { UserIconSolid } from "@/app/components/icons";
import { useRef } from "react";

function ProfileHeader() {
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className=" py-5">
      <div className="grid wrapper gap-4">
        {/* image */}
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <div className="flex items-start justify-start bg-red-400 ">
            <button
              className="rounded-full cursor-pointer "
              onClick={() => hiddenFileInputRef.current?.click()}
            >
              <UserIconSolid className="size-20 text-gray-200" />
            </button>
            <input type="file" ref={hiddenFileInputRef} hidden />
          </div>

          {/* following */}
          <div className="space-y-2">
            <p className="text-sm font-semibold  ">Lana Kane</p>

            <div className="grid grid-cols-3 gap-2 ">
              <p className="text-sm flex flex-col">
                <span className="font-semibold">424</span>
                <span className="text-sm">posts</span>
              </p>

              <p className="text-sm flex flex-col">
                <span className="font-semibold">260K</span>
                <span className="text-sm">followers</span>
              </p>

              <p className="text-sm flex flex-col">
                <span className="font-semibold">505</span>
                <span className="text-sm">following</span>
              </p>
            </div>
          </div>
        </div>

        {/* bio */}
        <div>
          <p className="text-sm font-semibold">Lana Kane</p>
          <p className="text-sm">Agent</p>

          <p className="text-sm">
            International Secret Intelligence Service (ISIS).
          </p>

          {/* interests */}
          <p className="text-sm">
            <span className="text-sm">
              Espionage, International Relations, and Coffee.
            </span>
          </p>
        </div>

        <div>
          <Button label="Edit Profile" className="bg-slate-100" />
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
