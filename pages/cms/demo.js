import React from "react";
import Navbar from "./navbar";
import { ImHome } from "react-icons/im";

export default function demo() {
  return (
    <div className="h-full w-full  text-2xl text-yellow-200 mt-28">
      <Navbar />
      <div className="grid grid-cols-2">
        <div>qwertyj</div>
        <div className="flex justify-evenly">
          <h1>asdfg</h1>
          <h1>zxcvbn</h1>
          <h1>zxvbn</h1>
          <ImHome className="fill-red-800" size={50} />
        </div>
      </div>
    </div>
  );
}
