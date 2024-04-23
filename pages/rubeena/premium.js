import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[296mm] bg-white min-w-[210mm]">
          <div className="absolute mt-10 z-10 w-[210mm] flex bg-gradient-to-r from-gray-300 to-slate-50">
            <img
              className="rounded-full ml-10 border-[12px] border-cyan-800 w-48"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />
            <div className="m-14">
              <h1 className="text-[25px] font-semibold text-cyan-900">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <h1 className="text-cyan-900">{resume.personal.role}</h1>
            </div>
          </div>
          <div className="grid grid-cols-3 z-0 h-[297mm]">
            <div className="bg-cyan-800 text-white">
              <div className="mt-64 mx-6">
                <div>
                  <h1 className="border-2 border-white mt-5 mb-2 text-[16px] flex justify-center align-middle py-2 text-white">
                    CONTACTS
                  </h1>
                  <h1 className="text-white text-[12px]">
                    {resume.personal.email}
                  </h1>
                  <h1 className="text-white text-[12px]">
                    {resume.personal.phone}
                  </h1>
                  <h1 className="text-white text-[12px]">
                    {resume.personal.dob}
                  </h1>
                </div>
                <div>
                  <h1 className="border-2 border-white text-[16px] mt-5 mb-3 flex justify-center align-middle py-2 text-white">
                    SOCIAL
                  </h1>
                  {resume.social.map((item) => (
                    <div>
                      <h1 className="text-white text-[12px]">{item.network}</h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 text-white border-white text-[16px] mt-5 mb-3 flex justify-center align-middle py-2">
                    EDUCATION
                  </h1>
                  {resume.education.map((item) => (
                    <div className="py-1 my-2">
                      <h1 className="text-[12px] text-white">
                        {item.endDate.slice(0, 4)}
                      </h1>
                      <h1 className="text-[16px] text-white">
                        {item.institution}
                      </h1>
                      <h1 className="text-[12px] text-white">
                        {item.fieldOfStudy}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 border-white text-white text-[16px] mt-5 mb-3 flex justify-center align-middle py-2">
                    SKILLS
                  </h1>
                  {resume.skills.map((item) => (
                    <div className="flex justify-between">
                      <h1 className="text-[14px] text-white">{item.name}</h1>
                      <h1 className="text-[12px] text-white mt-0.5">
                        {item.level}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 text-white border-white text-[16px] mt-5 mb-3 flex justify-center align-middle py-2">
                    AWARDS
                  </h1>
                  {resume.awards.map((item) => (
                    <div className="py-1 my-2">
                      <h1 className="text-[12px] text-white">
                        {item.date.slice(0, 4)}
                      </h1>
                      <h1 className="text-[16px] text-white">
                        {item.name}
                      </h1>
                      <h1 className="text-[12px] text-white">
                        {item.awarder}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="border-2 border-white text-[16px] mt-5 mb-3 flex justify-center align-middle py-2 text-white">
                    HOBBIES
                  </h1>
                  {resume.hobbies.map((item) => (
                    <div>
                      <h1 className="text-white text-[12px]">{item.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 text-black">
              <div className="mt-64 mx-6">
                <div>
                  <h1 className="text-[16px] font-semibold border-b-2 border-black mb-3">
                    PROFILE
                  </h1>
                  <p className="text-[12px] font-semibold">
                    {resume.objective}
                  </p>
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold border-b-2 border-black mb-2 mt-4">
                    WORK EXPERIENCE
                  </h1>
                  {resume.work.map((item) => (
                    <div className="py-1">
                      <div className="flex justify-between">
                        <h1 className="text-[14px] font-semibold ">
                          {item.company} {" - "} {item.designation}
                        </h1>
                        <h1 className="text-[12px] mt-1">
                          {item.from} - {item.to}
                        </h1>
                      </div>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold border-b-2 border-black mb-2 mt-4">
                    PROJECTS
                  </h1>
                  {resume.projects.map((item) => (
                    <div className="py-1">
                      <div className="flex justify-between">
                        <h1 className="text-[14px] font-semibold ">
                          {item.name}
                        </h1>
                        <h1 className="text-[12px] mt-1">
                          {item.from} - {item.to}
                        </h1>
                      </div>
                      <p className="text-[12px] font-semibold">
                        {item.website}
                      </p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold border-b-2 border-black mb-2 mt-4">
                    CERTIFICATIONS
                  </h1>
                  {resume.certifications.map((item) => (
                    <div className="py-1">
                      <div className="flex justify-between">
                        <h1 className="font-semibold text-[14px]">
                          {item.issuer}
                        </h1>
                        <h1 className="text-[12px] mt-1">{item.date}</h1>
                      </div>

                      <p className="text-[12px]">{item.designation}</p>
                      <p className="text-[12px]">{item.summary.data}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
