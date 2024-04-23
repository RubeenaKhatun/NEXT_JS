import React from "react";
import { demoResume } from "../../lib/Ali";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <Head>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[592mm] bg-white min-w-[210mm]">
          <div className="grid grid-cols-3">
            <div className=" bg-amber-700 h-[592mm]">
              <div className="ml-8 bg-gray-200 h-[592mm] p-4">
                <div className="">
                  <img
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  // alt="ProfilePhoto"
                  />
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-5 mb-1">
                    PERSONAL DETAILS
                  </h1>
                  <div>
                    <i className="bx bxs-mail"></i>
                    <span class="text-[13px]  font-semibold my-2">
                      {resume.personal.email}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-phone"></i>
                    <span class="text-[13px]  font-semibold my-2">
                      {resume.personal.phone}
                    </span>
                  </div>
                  <div>
                    <i className="bx bxs-calendar"></i>
                    <span class="text-[13px]  font-semibold my-2">
                      {resume.personal.dob}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-amber-700 text-[18px] font-semibold mt-5 mb-1">
                      SOCIAL
                    </h1>
                    {resume.social.map((item) => (
                      <div className="text-[13px] font-semibold mb-2">
                        <Link href={item.url}>
                          {item.network}
                          {" : "}
                          {item.url}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-5 mb-1">
                    EDUCATION
                  </h1>
                  {resume.education.map((item) => (
                    <div className="pb-3">
                      <h1 className="text-[13px] font-semibold relative">
                        <span className="font-bold">{item.institution} </span>
                        <span className="text-[12px] font-semibold">
                          {" "}
                          ({item.startDate} - {item.endDate})
                        </span>
                      </h1>

                      <h1 className="text-[12px] font-semibold">
                        {item.typeOfDegree} in {item.fieldOfStudy}
                      </h1>
                      <h1 class="text-[12px]">{item.summary.data}</h1>
                      <h1 class="text-[12px]">{item.gpa}</h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-2 mb-1">
                    TECHNICAL SKILLS
                  </h1>
                  {resume.tskills.map((item) => (
                    <div>
                      <h1 className="text-[13px] mb-1">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-5 mb-1">
                    SOFT SKILLS
                  </h1>
                  {resume.skills.map((item) => (
                    <div>
                      <h1 className="text-[13px] mb-1">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-6 ">
                    ACHIEVEMENTS
                  </h1>
                  {resume.achievements.map((item) => (
                    <div className="mb-1">
                      <h1 className="text-[13px] relative font-semibold">
                        {item.title}
                        <span className="text-[12px] text-amber-700 absolute right-0">
                          {item.date}
                        </span>
                      </h1>
                      <h1 className="text-[12px] font-semibold">
                        {item.issuer}
                      </h1>
                    </div>
                  ))}
                </div>
                {/* <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-2 mb-1">
                    AWARDS
                  </h1>
                  {resume.awards.map((item) => (
                    <div className="py-1">
                      <h1 className="text-[13px] font-bold relative m-0.5">
                        {item.name}
                      </h1>
                      <h1 className="text-[12px] font-semibold m-0.5">
                        {item.awarder}
                      </h1>
                    </div>
                  ))}
                </div> */}

                {/* <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-5 mb-1">
                    HOBBIES
                  </h1>
                  {resume.hobbies.map((item) => (
                    <div>
                      <h1 className="text-[13px] font-semibold my-2">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div> */}
                {/* <div>
                  <h1 className="text-amber-700 text-[18px] font-semibold mt-2 mb-1">
                    LANGUAGES
                  </h1>
                  {resume.languages.map((item) => (
                    <div>
                      <h1 className="text-[13px] font-semibold m-0.5">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="col-span-2 p-6">
              <h1 className="text-amber-700 text-[30px] mb-5">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <div>
                <h1 className="text-amber-700 text-[18px] font-semibold mt-4 mb-1">
                  PROFILE
                </h1>
                <h1 className="text-[13px]">{resume.objective}</h1>
              </div>
              <div>
                <h1 className="text-amber-700 text-[18px] font-semibold mt-4">
                  WORK
                </h1>
                {resume.work.map((item) => (
                  <div className="pb-3">
                    <h1 className="text-[13px] font-bold relative">
                      {item.company}
                      <span className="text-[13px] text-amber-700 absolute right-0">
                        {item.from} - {item.to}
                      </span>
                    </h1>
                    <h1 className="text-[12px] font-semibold">
                      {item.designation}
                    </h1>
                    <h1 class="text-[12px]">{item.summary.data}</h1>
                    <h1 class="text-[12px] mt-2">{item.summary.dataa}</h1>
                  </div>
                ))}
              </div>

              <div>
                <h1 className="text-amber-700 text-[18px] font-semibold">
                  PROJECTS
                </h1>
                {resume.projects.map((item) => (
                  <div className="pb-3">
                    <h1 className="text-[13px] font-bold relative">
                      {item.name}
                      <span className="text-[13px] text-amber-700 absolute right-0">
                        {item.from} {item.to}
                      </span>
                    </h1>
                    <h1 className="text-[12px] font-semibold">
                      {item.website}
                    </h1>
                    <h1 class="text-[12px]">{item.summary.data}</h1>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-amber-700 text-[18px] font-semibold mt-2">
                  CERTIFICATIONS
                </h1>
                {resume.certifications.map((item) => (
                  <div className="pb-3">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-amber-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <h1 className="text-[12px] font-semibold">{item.issuer}</h1>
                  </div>
                ))}
              </div>
              {/* <div>
                <h1 className="text-amber-700 text-[18px] font-semibold mt-4 mb-1">
                  COURSES
                </h1>
                {resume.courses.map((item) => (
                  <div className="pb-2">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-amber-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <h1 className="text-[12px] font-semibold">{item.issuer}</h1>
                  </div>
                ))}
              </div> */}

              {/* <div>
                <h1 className="text-amber-700 text-[18px] font-semibold mt-3 mb-1">
                  EXTRACURRICULAR ACTIVITIES
                </h1>
                {resume.extra.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-amber-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <h1 className="text-[12px] font-semibold">{item.issuer}</h1>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
