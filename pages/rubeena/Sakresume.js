import React from "react";
import { demoResume } from "../../lib/sakdata";
import Head from "next/head";
import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
                    className="w-40 mx-auto"
                    src={resume.personal.image}
                    alt="ProfilePhoto"
                  />
                  <h1 className="text-red-700 text-[18px] font-semibold mt-4 mb-1">
                    PERSONAL DETAILS
                  </h1>
                  <div className="flex gap-1">
                    <MdMail className="mt-2 fill-red-700" />
                    <span class="text-[13px] mt-1 font-semibold mb-2">
                      {resume.personal.email}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <FaPhone className="mt-2 fill-red-700" />
                    <span class="text-[13px] mt-1 font-semibold mb-2">
                      {resume.personal.phone}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-red-700 text-[18px] font-semibold mt-4 mb-1">
                      SOCIAL
                    </h1>
                    {resume.social.map((item) => (
                      <div className="text-[13px] font-semibold my-2 flex gap-1">
                        <BsLinkedin className="fill-red-700 mt-1" />
                        <Link className="" href={item.url}>
                          {item.username}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-red-700 text-[18px] font-semibold mt-4 mb-1">
                    EDUCATION
                  </h1>
                  {resume.education.map((item) => (
                    <div className="mb-2">
                      <h1 className="text-[13px] font-bold relative">
                        {item.institution}{" "}
                      </h1>
                      <h1 className="text-[12px] relative font-semibold">
                        {" "}
                        ({item.startDate} - {item.endDate})
                      </h1>
                      <p className="text-[12px] font-semibold">
                        {item.typeOfDegree} in {item.fieldOfStudy}
                      </p>
                      <p class="text-[12px] font-semibold">
                        {item.summary.data}
                      </p>
                      <p class="text-[12px] font-semibold">{item.gpa}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="text-red-700 text-[18px] font-semibold mt-4 mb-1">
                    SKILLS
                  </h1>
                  {resume.skills.map((item) => (
                    <div>
                      <h1 className="text-[13px] mb-2">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))}
                </div>
                {/* <div>
                  <h1 className="text-red-700 text-[18px] font-semibold mt-2 mb-1">
                    AWARDS
                  </h1>
                  {resume.awards.map((item) => (
                    <div className="py-1">
                      <h1 className="text-[13px] font-bold relative m-0.5">
                        {item.name}
                      </h1>
                      <p className="text-[12px] font-semibold m-0.5">
                        {item.awarder}
                      </p>
                    </div>
                  ))}
                </div> */}

                {/* <div>
                  <h1 className="text-red-700 text-[18px] font-semibold mt-5 mb-1">
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
                  <h1 className="text-red-700 text-[18px] font-semibold mt-2 mb-1">
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
              <h1 className="text-red-700 text-[30px] mb-5">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-4 mb-1">
                  PROFILE
                </h1>
                <p className="text-[13px]">{resume.objective}</p>
              </div>
              <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-4">
                  WORK
                </h1>
                {resume.work.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.company}
                      <span className="text-[13px] text-red-700 absolute right-0">
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
                <h1 className="text-red-700 text-[18px] font-semibold mt-4 ">
                  PROJECTS
                </h1>
                {resume.projects.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.name}
                      <span className="text-[13px] text-red-700 absolute right-0">
                        {item.from} {item.to}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.website}</p>
                    <p class="text-[12px]">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-4 ">
                  CERTIFICATIONS AND BADGES
                </h1>
                {resume.certifications.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.issuer}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-4 ">
                  ACHIEVEMENTS
                </h1>
                {resume.achievements.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.issuer}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-4 ">
                  POSITIONS
                </h1>
                {resume.positions.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">
                      {item.summary.data}
                    </p>
                  </div>
                ))}
              </div>
              {/* <div>
                <h1 className="text-red-700 text-[18px] font-semibold mt-3 mb-1">
                  EXTRACURRICULAR ACTIVITIES
                </h1>
                {resume.extra.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.title}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.date}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.issuer}</p>
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
