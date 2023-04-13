import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";

const Head = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
className="input w-full max-w-xs rounded-sm focus:outline-none focus:bg-gray-100"

        />
        <div className="flex items-center justify-between">
          <button className="btn btn-secondary">
            <PlusIcon className="h-6 w-6 text-gray-500" />
            <span>Upload</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Head;
