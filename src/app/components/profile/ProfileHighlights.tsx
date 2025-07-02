"use client";

import { AddIcon } from "@/app/components/icons";
import React from "react";

function ProfileHighlights() {
  const hiddenFileInputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div className="wrapper">
      <div className="grid place-items-center gap-2 w-fit">
        <button
          className="rounded-full cursor-pointer bg-slate-100 size-20 flex items-center justify-center border-2 border-dashed border-gray-300 "
          onClick={() => hiddenFileInputRef.current?.click()}
        >
          <AddIcon className="size-7 text-gray-300" />

          <input type="file" ref={hiddenFileInputRef} hidden />
        </button>

        <p className="text-sm font-medium">New</p>
      </div>
    </div>
  );
}

export default ProfileHighlights;
