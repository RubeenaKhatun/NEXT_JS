import React from "react";

const Cms = () => {
  return (
    <div>
      <div className="fixed w-full px-[150px] bg-white bg-transparent">
        <div className=" flex  px-5 py-8">
          <div className="grow">Logo</div>
          <div className="flex gap-8 text-black font-serif font-semibold">
            <div>Home</div>
            <div>Choose</div>
            <div>Teacher</div>
            <div>Pricing</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <img
        className="bg-cover"
        src="http://res.cloudinary.com/dhqhq0szn/image/upload/v1683046360/my-uploads/zyhr7sirtmezl6qtfj6p.jpg"
      ></img>
    </div>
  );
};

export default Cms;
