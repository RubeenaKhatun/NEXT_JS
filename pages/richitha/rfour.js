import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div className="bg-slate-200 h-[290mm]">
      <div className="bg-white  w-[210mm] h-[297mm] drop-shadow-2xl mx-auto">
        <div className="bg-white p-2 flex space-x-5">
          <div className="flex-col w-[100%]">
            <div className="m-3">
              <img
                className="w-[110%] h-[130%]"
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>
            </div>
            <div className="flex">
              {resume.social.map((item) => (
                <div className="mx-3 ml-5 pb-4  mt-3 ">
                  <span>
                    <Link href={item.url}>
                      <img
                        src={"https://www." + item.network + ".com/favicon.ico"}
                        className="w-5 "
                      />
                    </Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col mt-2 ml-3">
            <div className="">
              <p className=" text-black font-bold text-xl p-1 pt-2 pl-4 tracking-wide  mt-3 ">
                PROFILE
              </p>

              <p className="text-sm text-black p-3 pl-2 pt-2">
                {resume.objective}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="flex-col bg-black pt-3 pb-2">
              <span className="  text-3xl  bg-white p-1 pl-2 rounded-sm  text-black tracking-wider font-thin  ml-2">
                {resume.personal.role}
              </span>
              <span className=" text-5xl pl-[10%] text-white tracking-wide text-right font-serif ">
                {resume.personal.firstName} {resume.personal.lastName}
              </span>
            </div>
          </div>
          <div className="flex  text-lg m-4">
            <div className="font-col bg-gray-200">
              <div className="p-2  bg-gray-50">
                <p className="text-black text-lg font-bold tracking-wider pb-3">
                  SKILLS
                </p>
                {resume.skills.map((item) => (
                  <div>
                    <span className="text-lg font-semibold ">
                      <li>
                        {item.name} - {item.level}
                      </li>
                    </span>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              <div className="text-lg bg-gray-50 pb-2">
                <p className="text-black font-bold tracking-wider  p-1 px-3 py-1">
                  LANGUAGES
                </p>
                {resume.languages.map((item) => (
                  <div>
                    <p className="pl-6">
                      {item.name} : {item.fluency}
                    </p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              <div className="pt-2 pb-2 bg-gray-100">
                <p className="text-black font-bold tracking-wider  p-1 mx-2 ">
                  AWARDS
                </p>
                {resume.awards.map((item) => (
                  <div className="text-lg  ml-3">
                    <li className="font-semibold">{item.awarder}</li>
                    <p> [{item.date}] </p>
                    <p>{item.name}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>

              <div className=" pt-1 pb-3 bg-gray-200">
                <p className="text-black font-bold tracking-wider  p-1 px-2 pt-3   ">
                  PROJECTS
                </p>

                {resume.projects.map((item) => (
                  <div className=" ml-2 text-black ">
                    <p className="">
                      [{item.from}] - [{item.to}]
                    </p>
                    <Link href={item.website}>
                      <p className="font-semibold ml-1 tracking-wider">
                        {item.name}
                      </p>
                    </Link>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                    <p className="p-2"> </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="font-col">
              <div className="pl-2 ">
                <p className=" text-black font-bold text-xl tracking-wide  p-3  mt-3 ">
                  EDUCATION
                </p>
                <hr></hr>
                {resume.education.map((item) => (
                  <div className="text-base p-2 text-black ">
                    <p className="font-semibold text-black ">
                      {item.institution} [{item.startDate} - {item.endDate}]
                    </p>
                    <p>{item.fieldOfStudy}</p>
                    <p>{item.typeOfDegree}</p>
                    <p>{item.gpa}</p>
                    <p>{item.summary.enabled}</p>
                    <p>{item.enabled}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className=" text-black font-bold text-xl tracking-wide ml-3 p-1  mt-2 ">
                  CERTIFICATION
                </p>
                <hr className="m-3"></hr>
                {resume.certifications.map((item) => (
                  <div className="pt-4 text-black mx-3 ">
                    <p className="font-semibold">
                      {item.title} [{item.date}]
                    </p>
                    <p></p>
                    <p>{item.issuer}</p>
                    {/* <p>{item.summary.data}</p> */}
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
