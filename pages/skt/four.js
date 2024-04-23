import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="flex align-middle justify-center bg-zinc-400 h-[285mm] ">
      <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
        <div className="w-[205mm] h-40 bg-blue-500 absolute z-0 mt-10">
          <h1 className="text-white ml-80 mt-8 text-5xl">
            {resume.personal.firstName} {resume.personal.lastName}
          </h1>
          <h6 className="text-white ml-80 mt-1 ">{resume.personal.role}</h6>
        </div>
        <div className="grid grid-cols-3">
          <div className="bg-slate-900 h-auto ml-5 z-10">
            <img
              className="w-40 m-10 rounded-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />
            <div className="border-b-2 border-white m-6 p-3">
              <h1 className="font-medium text-lg text-white ">SKILLS</h1>
              {resume.skills.map((item) => (
                <div>
                  <h1 className="font-normal   text-white">{item.name}</h1>
                  <li className="text-sm ml-4 text-white">{item.level}</li>
                </div>
              ))}
            </div>
            <div className="border-b-2 border-white m-6 p-3">
              <h1 className="font-medium text-lg text-white ">SOCIAL</h1>
              {resume.social.map((item) => (
                <div className="ml-4 my-4 flex">
                  <img
                    src={"https://www." + item.network + ".com/favicon.ico"}
                    alt=""
                    className="w-5 h-5"
                  />
                  <Link href={item.url}>
                    <h1 className="ml-4 text-white">{item.username}</h1>
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <div className="border-b-2 border-white m-6 p-3">
                <h1 className="font-medium text-lg text-white ">AWARDS</h1>
                {resume.awards.map((item) => (
                  <div className="m-2">
                    <h1 className="text-white">{item.awarder}</h1>
                    <li className="text-white text-sm ml-4 ">{item.awarder}</li>
                  </div>
                ))}
              </div>
              <div className="border-b-2 border-white m-6 p-3">
                <h1 className="font-medium text-lg text-white ">HOBBIES</h1>
                {resume.hobbies.map((item) => (
                  <div className="m-2">
                    <h1 className="text-white">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="pt-48">
              <div className="border-b-4 border-black m-4 p-5">
                <h1 className="font-medium text-lg text-gray-600">ABOUT ME</h1>
                <p className="text-sm font-medium pt-1">{resume.objective}</p>
              </div>
            </div>
            <div className="border-b-4 border-black m-4 p-2">
              <h1 className="font-medium text-lg text-gray-600">
                WORK EXPERIENCE
              </h1>
              {resume.work.map((item) => (
                <div className="p-1">
                  <h1 className="font-medium ml-4 text-lg">{item.company}</h1>
                  <h2 className="font-semibold text-xs ml-4">
                    {item.from} - {item.to}
                  </h2>
                  <li className="ml-10 list-disc font-semibold">
                    {item.designation}
                  </li>
                  <li className="ml-10 list-disc font-semibold">
                    {item.website}
                  </li>
                </div>
              ))}
            </div>
            <div className="border-b-4 border-black m-4 p-2">
              <h1 className="font-medium text-lg text-gray-600">EDUCATION</h1>
              {resume.education.map((item) => (
                <div>
                  <h1 className="font-medium ml-6">{item.institution}</h1>
                  <h6 className="text-xs font-semibold ml-6">
                    {item.startDate} - {item.endDate}
                  </h6>
                  <li className="ml-8 font-semibold">{item.fieldOfStudy}</li>
                </div>
              ))}
            </div>
            <div className="border-b-4 border-black m-4 p-2">
              <h1 className="font-medium text-lg text-gray-600">AWARDS</h1>
              {resume.awards.map((item) => (
                <div>
                  <h1 className="font-medium ml-6">{item.title}</h1>
                  <h6 className="text-xs font-semibold ml-6">{item.date}</h6>
                  <li className="ml-8 font-semibold">{item.summary.data}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
