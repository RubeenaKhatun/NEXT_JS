import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="flex align-middle justify-center bg-zinc-400 h-[285mm] ">
      <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
        <div className="grid grid-cols-3">
          <div>
            <div className="col-span-1 bg-gray-300 h-[100%] w-[95%]">
              <div>
                <img
                  className="rounded-full w-[119px] ml-10 pt-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  alt="ProfilePhoto"
                />
              </div>

              <div>
                <h1 className="font-medium px-8 py-6 text-orange-800 pt-4">
                  Details
                </h1>
                <h2 className=" font-medium px-8  text-black">Phone</h2>
                <h6 className=" px-8 ">{resume.personal.phone}</h6>
                <h2 className=" font-medium px-8  text-black">Email</h2>
                <h6 className=" px-8 ">{resume.personal.email}</h6>
                <h2 className=" font-medium px-8  text-black">Date Of Birth</h2>
                <h6 className=" px-8 ">{resume.personal.dob}</h6>
              </div>
              <div>
                <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                  Skills
                </h1>
                {resume.skills.map((item) => (
                  <div>
                    <h1 className="font-medium ml-8">{item.name}</h1>
                    <h2 className="ml-8">{item.level}</h2>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="font-medium px-8 py-6 text-orange-800 pt-10">
                  Social Network
                </h1>
                {resume.social.map((item) => (
                  <div className="ml-8 my-4 flex">
                    <img
                      src={"https://www." + item.network + ".com/favicon.ico"}
                      alt=""
                      className="w-5 h-5"
                    />
                    <Link href={item.url}>
                      <h1 className="ml-4">{item.username}</h1>
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                  Hobbies
                </h1>
                {resume.hobbies.map((item) => (
                  <div>
                    <h1 className="px-8">{item.name}</h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="font-medium px-8 py-2 text-orange-800 pt-10">
                  Languages
                </h1>
                {resume.languages.map((item) => (
                  <div>
                    <h1 className="px-8">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            <h1 className="mt-12 text-2xl font-bold ">
              {resume.personal.firstName} {resume.personal.lastName}
            </h1>
            <h2 className="font-nomal mt-1 ">{resume.personal.role}</h2>
            <div>
              <h1 className="font-medium text-orange-800 pt-20">Profile</h1>
              <p>{resume.objective}</p>
            </div>
            <div>
              <h1 className="font-medium text-orange-800 pt-4">
                Employement History
              </h1>
              {resume.work.map((item) => (
                <div>
                  <h1 className="font-medium ">{item.company}</h1>
                  <h2 className="font-extralight text-xs">
                    {item.from} - {item.to}
                  </h2>
                  <li className="ml-8 list-disc">{item.designation}</li>
                  <li className="ml-8 list-disc">{item.website}</li>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-orange-800 pt-4">Education</h1>
              {resume.education.map((item) => (
                <div>
                  <h1 className="font-medium">{item.institution}</h1>
                  <h6 className="text-xs">
                    {item.startDate} - {item.endDate}
                  </h6>
                  <li className="px-8">{item.fieldOfStudy}</li>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-orange-800 pt-4">Projects</h1>
              {resume.projects.map((item) => (
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <h6 className="text-xs">
                    {item.from} - {item.to}
                  </h6>
                  <li className="text-sm px-8">{item.website}</li>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-orange-800 pt-4">
                certifications
              </h1>
              {resume.projects.map((item) => (
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <h6 className="text-xs">
                    {item.from} - {item.to}
                  </h6>
                  <li className="text-sm px-8">{item.website}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
