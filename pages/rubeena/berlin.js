import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { demoResume } from "../../lib/data";

export default function index() {
  const resume = demoResume();
  return (
    <div className="flex align-middle justify-center bg-zinc-300">
      <div className="container w-[210mm] h-[296mm] bg-white p-8 min-w-[210mm]">
        <div className="h-auto pb-8 border-b-4">
          <div>
            <h1 className="text-[25px] font-sans font-semibold">
              {resume.personal.firstName} {resume.personal.lastName}
            </h1>
            <h1 className="text-[16px] text-gray-500 font-semibold mt-2">
              {resume.personal.role}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-6">
          <div className="border-r-4 h-[242mm] pr-8">
            <div>
              <h1 className="text-[16px] font-semibold">DETAILS</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              <h1 className="text-[12px] font-semibold pt-3">
                DOB
                <span className="text-[12px] text-gray-600">
                  {" : "}
                  {resume.personal.dob}
                </span>
              </h1>
              <h1 className="text-[12px] font-semibold pt-1">
                PHONE
                <span className="text-[12px] text-gray-600">
                  {" : "}
                  {resume.personal.phone}
                </span>
              </h1>
              <h1 className="text-[12px] font-semibold pt-1">
                EMAIL
                <span className="text-[12px] text-gray-600">
                  {" : "}
                  {resume.personal.email}
                </span>
              </h1>
              {resume.social.map((item) => (
                <div className="text-[12px] font-semibold pt-1">
                  <a href="{item.url}">{item.network}</a>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-4">EDUCATION</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.education.map((item) => (
                <div className="mt-1">
                  <span className="text-[12px] font-bold">
                    {item.institution}
                  </span>
                  <p className="text-[12px] pt-1 font-semibold text-gray-600">
                    {item.fieldOfStudy}{" "}
                    <span className="text-[12px] font-semibold text-gray-600">
                      ({item.startDate} to {item.endDate})
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="">
              <h1 className="text-[16px] font-semibold pt-4">SKILLS</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.skills.map((item) => (
                <div className="mt-1">
                  <h1 className="text-[12px] text-black pt-1 flex justify-between">
                    <div className="font-semibold">{item.name} </div>
                    <div>{item.level}</div>
                  </h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-4">AWARDS</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.awards.map((item) => (
                <div className="mt-1">
                  <span className="text-[12px] font-bold">{item.name}</span>
                  <p className="text-[12px] pt-1 font-semibold text-gray-600">
                    {item.awarder}{" "}
                    <span className="text-[12px] font-semibold text-gray-600">
                      ({item.date})
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-4">HOBBIES</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.hobbies.map((item) => (
                <div className="mt-1">
                  <h1 className="text-[12px] font-semibold text-black pt-1">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-4">LANGUAGES</h1>
              <hr className="w-[15%] h-1 bg-black"></hr>
              {resume.languages.map((item) => (
                <div className="mt-1">
                  <h1 className="text-[12px] font-semibold text-black pt-1">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 pl-10">
            <div>
              <h1 className="text-[16px] font-semibold">PROFILE</h1>
              <hr className="w-[7%] h-1 bg-black"></hr>
              <p className="text-[12px] text-black font-semibold py-3">
                {resume.objective}
              </p>
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                EMPLOYMENT HISTORY
              </h1>
              <hr className="w-[7%] h-1 bg-black mb-2"></hr>
              {resume.work.map((item) => (
                <div className="pb-3">
                  <div className="flex justify-between">
                    <span className="text-[12px] font-bold mt-1">
                      {item.company}
                      {" - "}
                      <span className="text-[12px] font-bold mt-1">
                        {item.designation}
                      </span>
                    </span>
                    <p className="text-[12px] py-1 font-semibold text-gray-600">
                      ({item.from} to {item.to})
                    </p>
                  </div>
                  <p class="text-[12px] text-gray-600">{item.summary.data}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                PROJECTS
              </h1>
              <hr className="w-[7%] h-1 bg-black mb-2"></hr>
              {resume.projects.map((item) => (
                <div className="pb-3">
                  <div className="flex justify-between">
                    <div className="text-[12px] font-bold mt-1">
                      <a href="{item.website}">{item.name}</a>
                    </div>
                    <div className="text-[12px] py-1 font-semibold text-gray-600">
                      ({item.from} to {item.to})
                    </div>
                  </div>
                  <p class="text-[12px] text-gray-600">{item.summary.data}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-[16px] font-semibold pt-3 border-t-2">
                CERTIFICATIONS
              </h1>
              <hr className="w-[7%] h-1 bg-black mb-2"></hr>
              {resume.certifications.map((item) => (
                <div className="pb-2">
                  <div className="flex justify-between">
                    <div className="text-[12px] font-bold mt-1">
                      <a href="{item.website}">{item.title}</a>
                    </div>
                    <div className="text-[12px] py-1 font-semibold text-gray-600">
                      ({item.date})
                    </div>
                  </div>
                  <p class="text-[12px] text-gray-600">{item.summary.data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
