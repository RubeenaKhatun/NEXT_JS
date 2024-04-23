import React from "react";
import { demoResume } from "../../lib/myResume";
import Head from "next/head";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function index() {
  const resume = demoResume();
  return (
    <div>
      <Head>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Head>
      <div className="flex align-middle justify-center bg-zinc-400">
        <div className="container w-[210mm] h-[297mm] bg-white min-w-[210mm]">
          <div className="grid grid-cols-3">
            <div className=" bg-red-700 h-[296mm]">
              <div className="ml-8 bg-gray-200 h-[296mm] p-4">
                <div className="">
                  <img
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU"
                  // alt="ProfilePhoto"
                  />
                  <h1 className="text-red-700 text-[16px]tracking-wider font-semibold mt-4 mb-1">
                    PERSONAL DETAILS
                  </h1>
                  <div className="flex gap-1">
                    <FiMail className="mt-2" />
                    <span class="text-[12px]  font-semibold my-2">
                      {resume.personal.email}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <FaPhone className="mt-2" />
                    <span class="text-[12px]  font-semibold my-2">
                      {resume.personal.phone}
                    </span>
                  </div>
                  {/* <div>
                    <i className="bx bxs-calendar"></i>
                    <span class="text-[12px]  font-semibold my-2">
                      {resume.personal.dob}
                    </span>
                  </div> */}
                  <div>
                    <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-3 mb-1">
                      SOCIAL
                    </h1>
                    {resume.social.map((item) => (
                      <div className="text-[12px] font-semibold my-2">
                        <Link href={item.url}>{item.url}</Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5">
                    EDUCATION
                  </h1>
                  {resume.education.map((item) => (
                    <div className="py-2">
                      <h1 className="text-[13px] font-semibold relative">
                        {item.institution}
                        <br /> ({item.startDate} - {item.endDate})
                      </h1>
                      <p className="text-[12px] font-semibold">
                        {item.typeOfDegree} in {item.fieldOfStudy}
                      </p>
                      <p class="text-[12px]">{item.summary.data}</p>
                      <p class="text-[12px]">{item.gpa}</p>
                    </div>
                  ))}
                  <div className="pb-2">
                    <h1 className="text-[13px] font-semibold relative">
                      St Ann's High School (2018)
                    </h1>
                    <p class="text-[12px]">9.7 CGPA</p>
                  </div>
                </div>
                <div>
                  <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-4 mb-1">
                    TECHNICAL SKILLS
                  </h1>
                  <div>
                    <h1 className="text-[12px] my-2">
                      <span className="font-semibold">
                        <span className="font-bold text-[13px]">
                          Web Development
                        </span>
                        <br />
                        NextJS, MERN Stack, JavaScript, HTML, CSS, TailwindCSS
                      </span>
                    </h1>
                    <h1 className="text-[12px] my-2">
                      <span className="font-semibold">
                        <span className="font-bold text-[13px]">
                          Programming Languages
                        </span>
                        <br />
                        Java, Python, C
                      </span>
                    </h1>
                    <h1 className="text-[12px] my-2">
                      <span className="font-semibold">
                        Data Structures and Algorithms
                      </span>
                    </h1>
                    <h1 className="text-[12px] my-2">
                      <span className="font-semibold">
                        Software Development Life Cycle
                      </span>
                    </h1>
                  </div>
                  {/* {resume.tskills.map((item) => (
                    <div>
                      <h1 className="text-[12px] my-2">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))} */}
                </div>
                <div>
                  <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
                    SOFT SKILLS
                  </h1>
                  {resume.skills.map((item) => (
                    <div>
                      <h1 className="text-[12px] my-2">
                        <span className="font-semibold">{item.name}</span>
                      </h1>
                    </div>
                  ))}
                </div>
                {/* <div>
                  <h1 className="text-red-700 text-[17px]font-semibold mt-2 mb-1">
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

                <div>
                  <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
                    HOBBIES
                  </h1>
                  {resume.hobbies.map((item) => (
                    <div>
                      <h1 className="text-[12px] font-semibold my-2">
                        {item.name}
                      </h1>
                    </div>
                  ))}
                </div>
                {/* <div>
                  <h1 className="text-red-700 text-[17px]font-semibold mt-2 mb-1">
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
              <h1 className="text-red-700 text-[30px]">
                {resume.personal.firstName} {resume.personal.lastName}
              </h1>
              <div>
                <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-4">
                  PROFILE
                </h1>
                <p className="text-[12px]">{resume.objective}</p>
              </div>
              <div>
                <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
                  EXPERIENCE
                </h1>
                {resume.work.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
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
                <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
                  PROJECTS
                </h1>
                {resume.projects.map((item) => (
                  <div className="py-1">
                    <h1 className="text-[13px] font-bold relative">
                      {item.name}
                      <span className="text-[12px] text-red-700 absolute right-0">
                        {item.from} {item.to}
                      </span>
                    </h1>
                    <p className="text-[12px] font-semibold">{item.website}</p>
                    <p class="text-[12px]">{item.summary.data}</p>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
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
                <h1 className="text-red-700 text-[17px]tracking-wider font-semibold mt-5 mb-1">
                  CERTIFICATIONS
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
              {/* <div>
                <h1 className="text-red-700 text-[17px]font-semibold mt-3 mb-1">
                  COURSES
                </h1>
                {resume.courses.map((item) => (
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
              <div>
                <h1 className="text-red-700 text-[17px] tracking-wider font-semibold mt-5 mb-1">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
