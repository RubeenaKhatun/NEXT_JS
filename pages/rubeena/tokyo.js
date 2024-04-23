import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[296mm] bg-white min-w-[210mm]">
          <div className="flex bg-red-700">
            <img
              className="rounded-full p-6 w-48"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
              alt="ProfilePhoto"
            />
            <div className="m-1 py-12">
              <h1 className="text-3xl text-white font-semibold m-1">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <h1 className="text-sm text-white m-1">{resume.personal.role}</h1>
            </div>
          </div>
          <div className="flex justify-around p-3 border-b-2">
            <div className="text-[12px] font-semibold">
              {resume.personal.email}
            </div>
            <div className="text-[12px] font-semibold">
              {resume.personal.phone}
            </div>
            <div className="text-[12px] font-semibold">
              {resume.personal.dob}
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2 h-[230mm] border-r-2 py-6 px-8">
              <div>
                <h1 className="text-[16px] font-bold">Profile</h1>
                <p className="text-[12px] font-semibold ml-2">
                  {resume.objective}
                </p>
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">
                  Employment History
                </h1>
                {resume.work.map((item) => (
                  <div className="my-1 ml-2">
                    <div className="flex justify-between">
                      <span className="text-[12px] font-bold mt-1">
                        ● {item.company}
                        {" - "}
                        <span className="text-[12px] font-semibold">
                          {item.designation}
                        </span>
                      </span>
                      <p className="text-[12px] py-1 font-semibold text-gray-600">
                        ({item.from} to {item.to})
                      </p>
                    </div>
                    <p class="text-[12px] ml-3 font-semibold">
                      {item.summary.data}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">
                  Certifications
                </h1>
                {resume.certifications.map((item) => (
                  <div className="my-1 ml-2">
                    <div className="flex justify-between">
                      <span className="text-[12px] font-bold mt-1">
                        ● {item.title}
                      </span>
                      <p className="text-[12px] pt-1 font-semibold text-gray-600">
                        ({item.date})
                      </p>
                    </div>
                    <div className="text-[12px] ml-3 font-semibold">
                      {item.issuer}
                    </div>
                    <div className="text-[12px] ml-3 font-semibold">
                      {item.summary.data}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">Projects</h1>
                {resume.projects.map((item) => (
                  <div className="my-1 ml-2">
                    <div className="flex justify-between">
                      <div className="text-[12px] font-bold mt-1">
                        ● {item.name}
                      </div>
                      <p className="text-[12px] py-1 font-semibold text-gray-500">
                        ({item.from} to {item.to})
                      </p>
                    </div>
                    <div className="ml-3">
                      <div className="text-[12px] font-semibold">
                        {item.website}
                        <p class="text-[12px] font-semibold">
                          {item.summary.data}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-6 px-4">
              <div>
                <h1 className="text-[16px] font-bold ">Education</h1>
                {resume.education.map((item) => (
                  <div className="ml-2 py-0.5">
                    <div className="text-[12px] font-bold mt-1">
                      ● {item.institution}
                    </div>
                    <div className="text-[12px] ml-3 font-semibold">
                      {item.fieldOfStudy}
                    </div>
                    <p className="text-[12px] ml-3 font-semibold text-gray-600">
                      ({item.startDate} to {item.endDate})
                    </p>
                    <p className="text-[12px] ml-3 font-semibold">
                      {item.summary.data}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">Skills</h1>
                {resume.skills.map((item) => (
                  <div className="ml-1">
                    <h1 className="text-[12px] font-semibold m-1">
                      ● {item.name} - {item.level}
                    </h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">Social</h1>
                {resume.social.map((item) => (
                  <div className="ml-1">
                    <h1 className="text-[12px] font-semibold m-1">
                      ● {item.network}
                    </h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">Awards</h1>
                <div className="ml-1">
                  {resume.awards.map((item) => (
                    <div className="py-1">
                      <h1 className="text-[12px] font-bold relative">
                        ● {item.name}
                      </h1>
                      <p className="text-[12px] font-semibold ml-3">
                        {item.awarder}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-4 mb-1">Hobbies</h1>
                {resume.awards.map((item) => (
                  <div className="ml-1">
                    <h1 className="text-[12px] font-semibold m-1">
                      ● {item.name}
                    </h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-[16px] font-bold mt-5 mb-1">Languages</h1>
                {resume.languages.map((item) => (
                  <div className="ml-1">
                    <h1 className="text-[12px] font-semibold m-1">
                      ● {item.name}
                    </h1>
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
