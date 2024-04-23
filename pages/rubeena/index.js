import React from "react";
import Link from "next/link";
export default function index() {
  return (
    <div className="mx-auto w-[50%] p-28">
      <h1 className="font-bold p-10">RUBEENA RESUME TEMPLATES</h1>
      <div className="grid grid-cols-2">
        <Link className="m-10 p-4 rounded-lg bg-gray-300" href="/rubeena/rk">
          BERLIN
        </Link>

        <Link
          className="m-10 p-4 rounded-lg bg-gray-300"
          href="/rubeena/modern"
        >
          MODERN
        </Link>

        <Link className="m-10 p-4 rounded-lg bg-gray-300" href="/rubeena/tokyo">
          TOKYO
        </Link>

        <Link
          className="m-10 p-4 rounded-lg bg-gray-300"
          href="/rubeena/premium"
        >
          PREMIUM
        </Link>
      </div>
    </div>
  );
}
