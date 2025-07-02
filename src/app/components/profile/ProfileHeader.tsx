// type Props = {};
"use client";

import Button from "@/app/components/Button";
import { CameraIconSolid } from "@/app/components/icons";
import { useRef } from "react";

function ProfileHeader() {
  const hiddenFileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className=" py-5">
      <div className="grid wrapper gap-4">
        {/* image */}
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
          <button
            className="rounded-full cursor-pointer bg-slate-100 size-20 flex items-center justify-center"
            onClick={() => hiddenFileInputRef.current?.click()}
          >
            <CameraIconSolid className="size-7 text-gray-300" />
            <input type="file" ref={hiddenFileInputRef} hidden />
          </button>

          {/* following */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Lana Kane</p>

            <div className="flex gap-8 ">
              <p className="text-sm flex flex-col">
                <span className="font-semibold">424</span>
                <span className="text-xs">posts</span>
              </p>

              <p className="text-sm flex flex-col">
                <span className="font-semibold">260K</span>
                <span className="text-xs">followers</span>
              </p>

              <p className="text-sm flex flex-col">
                <span className="font-semibold">505</span>
                <span className="text-xs">following</span>
              </p>
            </div>
          </div>
        </div>

        {/* bio */}
        <div>
          <p className="text-sm font-semibold">Lana Kane</p>

          <p className="text-sm">International Secret Intelligence Service.</p>

          {/* interests */}
          <p className="text-sm">
            <span className="text-sm">Espionage, International Relations.</span>
          </p>

          <p className="text-xs mt-3">
            Followed by <span className="font-semibold">sterling archer</span>,
            <span className="font-semibold">malory archer</span> + 48 more
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button label="Edit Profile" className="bg-slate-100" />
          <Button label="Share Profile" className="bg-slate-100" />
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
