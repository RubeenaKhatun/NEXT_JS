import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="bg-slate-200 h-[290mm]">
      <div className="bg-zinc-800  w-[210mm] h-[297mm] m-2  mx-auto">
        <div className="flex">
          <div className="pl-5"></div>
          <div className="flex-col mt-[10%] pb-3 pl-1 w-[40%] bg-white  ">
            <div className="flex bg-white  text-black mt-10 ">
              <img
                className="w-[60%] h-[50%] pl-[10%] mb-3 "
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
            </div>
            <div className="flex-col bg-zinc-200">
              <span className=" text-3xl font-extrabold pl-7 pr-1 pt-[12%] tracking-wide font-serif ">
                {resume.personal.firstName} {resume.personal.lastName}
              </span>
              <p className="  text-2xl pl-7  text tracking-wider font-thin mb-3">
                {resume.personal.role}
              </p>
            </div>
            <div className="p-2">
              <p className="text-black font-bold tracking-wider  p-1 mx-2 my-1">
                SKILLS
              </p>
              {resume.skills.map((item) => (
                <div>
                  <span className="text-base font-semibold ">
                    <li>
                      {item.name} - {item.level}
                    </li>
                  </span>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            <div className="text-base">
              <p className="text-black font-bold tracking-wider  p-1 mx-3 my-1">
                LANGUAGES
              </p>
              {resume.languages.map((item) => (
                <div>
                  <p className="ml-6">
                    {item.name} : {item.fluency}
                  </p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                AWARDS
              </p>
              {resume.awards.map((item) => (
                <div className="text-sm pt-4 ml-3">
                  <li className="font-semibold">[{item.date}]</li>
                  <p className="font-bold pl-3">{item.name}</p>
                  <p className="pl-3">{item.awarder}</p>

                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>

            <p className="text-black font-bold tracking-wider   p-1 mx-2 mt-2 ">
              WORK
            </p>
            {resume.work.map((item) => (
              <div className="m-2">
                <Link href={item.website}>
                  <p className=" font-sembold text-base tracking-wider">
                    {item.company}
                  </p>
                </Link>
                <p>
                  [ {item.from}] - [{item.to}]
                </p>
                <p>{item.designation}</p>

                <p>{item.summary.enabled}</p>
              </div>
            ))}
          </div>
          <div className="flex w-[60%] mt-14 ml-3 mr-3">
            <div className="flex-col">
              <div>
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  PROFILE
                </p>
                <hr></hr>

                <p className="text-sm text-white p-1 pt-4">
                  {resume.objective}
                </p>
              </div>
              <div className="p-2 ">
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  EDUCATION
                </p>
                <hr></hr>
                {resume.education.map((item) => (
                  <div className="text-sm p-2 text-white ">
                    <p className="font-semibold text-white ">
                      {item.institution} [{item.startDate}] - [{item.endDate}]
                    </p>
                    <p className="text-white">{item.fieldOfStudy}</p>
                    <p className="text-white">{item.typeOfDegree}</p>
                    <p className="text-white">{item.gpa}</p>
                    <p className="text-white">{item.summary.enabled}</p>
                    <p className="text-white">{item.enabled}</p>
                  </div>
                ))}
              </div>
              <div className="  p-3">
                <p className=" text-white font-semibold text-xl tracking-wide  p-1  mt-3 ">
                  PROJECTS
                </p>
                <hr></hr>
                {resume.projects.map((item) => (
                  <div className="p-1 text-white ">
                    <Link href={item.website}>
                      <p className="font-bold  text-white tracking-wider">
                        {item.name}
                      </p>
                    </Link>
                    <p className="ml-3 text-white">
                      [{item.from}] - [{item.to}]
                    </p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className=" text-white font-semibold text-xl tracking-wide ml-3 p-1  mt-3 ">
                  CERTIFICATION
                </p>
                <hr></hr>
                {resume.certifications.map((item) => (
                  <div className="pt-4 text-white ">
                    <p className=" text-white">[{item.date}]</p>
                    <p className="font-semibold  text-white">{item.title}</p>
                    <p></p>
                    <p className=" text-white">{item.issuer}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
