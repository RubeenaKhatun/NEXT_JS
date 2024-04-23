import React from "react";
import { demoResume } from "../../lib/data";
import Head from "next/head";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <Head>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[296mm] bg-white min-w-[210mm]">
          <div className="grid grid-cols-3">
            <div className=" bg-red-700 h-[296mm]">
              <div className="ml-8 bg-gray-200 h-[296mm] p-4">
                <div className="">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                    alt="ProfilePhoto"
                  />
                  <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1">
                    Personal Details
                  </h1>
                  <div>
                    <i className="bx bxs-user"></i>
                    <span class="text-[12px] font-semibold ">
                      {resume.personal.firstName} {resume.personal.lastName}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-mail"></i>
                    <span class="text-[12px]  font-semibold m-0.5">
                      {resume.personal.email}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-phone"></i>
                    <span class="text-[12px]  font-semibold m-0.5">
                      {resume.personal.phone}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-calendar"></i>
                    <span class="text-[12px]  font-semibold m-0.5">
                      {resume.personal.dob}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                      Social
                    </h1>
                    {resume.social.map((item) => (
                      <div className="text-[12px] font-semibold m-0.5">
                        <a href="{item.url}">{item.network}</a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                    Skills
                  </h1>
                  {resume.skills.map((item) => (
                    <div>
                      <h1 className="text-[12px] font-semibold m-0.5">
                        <span className="font-bold">{item.name}</span> -{" "}
                        {item.level}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                    Awards
                  </h1>
                  {resume.awards.map((item) => (
                    <div className="py-1">
                      <h1 className="text-[12px] font-bold relative m-0.5">
                        {item.name}
                      </h1>
                      <p className="text-[12px] font-semibold m-0.5">
                        {item.awarder}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                    Languages
                  </h1>
                  {resume.languages.map((item) => (
                    <div>
                      <h1 className="text-[12px] font-semibold m-0.5">
                        <span className="font-bold">{item.name}</span> -{" "}
                        {item.fluency}
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-red-700 text-[16px] font-semibold mt-2 mb-1">
                    Hobbies
                  </h1>
                  {resume.hobbies.map((item) => (
                    <div>
                      <h1 className="text-[12px] font-semibold m-0.5">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-2 p-6">
              <h1 className="text-red-700 text-[25px] font-">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-4">
                  Profile
                </h1>
                <p className="text-[12px]">{resume.objective}</p>
              </div>
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1">
                  Work
                </h1>
                {resume.work.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[12px] font-bold relative">
                      {item.company}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.from} - {item.to}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">
                      {item.designation}
                    </p>
                    <p class="text-[12px]">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1">
                  Education
                </h1>
                {resume.education.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[12px] font-bold relative">
                      {item.institution}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.startDate} - {item.endDate}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">
                      {item.fieldOfStudy}
                    </p>
                    <p class="text-[12px]">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1">
                  Projects
                </h1>
                {resume.projects.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[12px] font-bold relative">
                      {item.name}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.from} - {item.to}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.website}</p>
                    <p class="text-[12px]">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[16px] font-semibold mt-3 mb-1">
                  Certifications
                </h1>
                {resume.certifications.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[12px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.issuer}</p>
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
