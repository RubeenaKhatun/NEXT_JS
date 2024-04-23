import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";
import Link from "next/link";
export default function index() {
  const resume = demoResume();
  return (
    <div className="flex align-middle justify-center bg-zinc-400 h-[285mm] ">
      <div className="container w-[210mm] h-[285mm] bg-white min-w-[210mm] ">
        <div className="grid grid-cols-5">
          <div className="col-span-2 border-2 border-solid border-black h-auto ml-5 mt-20">
            <img
              className=" pt-4 w-52 absolute top-0 ml-10 border-2  border-gray-600 z-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />

            <div>
              <h1 className="text-black mt-36 ml-16  font-medium text-3xl">
                {resume.personal.firstName}
              </h1>
              <h1 className="text-black ml-16 font-medium text-3xl">
                {resume.personal.lastName}
              </h1>
              <h6 className="font-normal text-xs ml-16 pt-2">
                {resume.personal.role}
              </h6>
            </div>
            <div>
              <h1 className="font-bold text-lg ml-16 pt-4 p-1">contact</h1>
              <li className="font-normal ml-20">{resume.personal.email}</li>
              <li className="font-normal ml-20">{resume.personal.phone}</li>
              <li className="font-normal ml-20">{resume.personal.dob}</li>
            </div>
            <div>
              <h1 className="font-bold text-lg ml-16 pt-4">skills</h1>
              {resume.skills.map((item) => (
                <div>
                  <h1 className="font-medium ml-16 p-2">{item.name}</h1>
                  <h1 className="text-sm ml-16 px-2">{item.level}</h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-bold  text-lg ml-16 pt-4">Social Network</h1>
              {resume.social.map((item) => (
                <div className="ml-20 my-4 flex">
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
              <h1 className="font-bold  text-lg ml-16 pt-2">Hobbies</h1>
              {resume.hobbies.map((item) => (
                <div>
                  <h1 className="px-20 text-sm p-1">{item.name}</h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-bold  text-lg ml-16 pt-2">Languages</h1>
              {resume.hobbies.map((item) => (
                <div>
                  <h1 className="px-20 text-sm p-1">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <div>
              <h1 className="font-medium text-xl ml-8 mt-20">About</h1>
              <p className="ml-1 p-4 pt-1">{resume.objective}</p>
            </div>
            <div className="p-2 px-0">
              <h1 className="font-medium text-xl ml-8 ">Education</h1>
              {resume.education.map((item) => (
                <div>
                  <h1 className="font-medium ml-8">{item.institution}</h1>
                  <h6 className="text-xs font-semibold ml-12">
                    {item.startDate} - {item.endDate}
                  </h6>
                  <li className="ml-14 font-semibold">{item.fieldOfStudy}</li>
                </div>
              ))}
            </div>
            <div className="p-2 px-0">
              <h1 className="font-medium text-xl ml-8 pt-2 ">
                Work Experience
              </h1>
              {resume.work.map((item) => (
                <div className="p-1">
                  <h1 className="font-medium ml-8 text-lg">{item.company}</h1>
                  <h2 className="font-semibold text-xs ml-8">
                    {item.from} - {item.to}
                  </h2>
                  <li className="ml-14 list-disc font-semibold">
                    {item.designation}
                  </li>
                  <li className="ml-14 list-disc font-semibold">
                    {item.website}
                  </li>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-xl ml-8 pt-2 ">Certifications</h1>
              {resume.certifications.map((item) => (
                <div>
                  <h1 className="ml-8 text-normal font-semibold">
                    {item.title}
                  </h1>
                  <li className="ml-12 text-sm font-medium">{item.issuer}</li>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-xl ml-8 pt-2 ">Awards</h1>
              {resume.awards.map((item) => (
                <div>
                  <h1 className="ml-8 text-normal font-semibold">
                    {item.name}
                  </h1>
                  <li className="ml-12 text-sm font-medium">{item.awarder}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
