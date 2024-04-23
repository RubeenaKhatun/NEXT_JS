import React from "react";
import Link from "next/link";
import { demoResume } from "../../lib/myResume";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

export default function RK() {
  const resume = demoResume();
  return (
    <div className="flex justify-center bg-slate-400">
      <div className="container w-[210mm] h-[297mm] bg-white min-h-[297mm] min-w-[210mm]">
        <div className="px-8 py-4 bg-cyan-800 relative">
          {/* <div>
            <img
              src="/passpic.jpg"
              alt=""
              className="h-32 absolute right-7 top-3 rounded-full"
            />
          </div> */}
          <div>
            <h1 className="font-serif text-white text-[28px] py-2 tracking-widest">
              {resume.personal.firstName} {resume.personal.lastName}
            </h1>
            <h1 className="font-serif text-white text-[13px] pb-1 border-b border-white tracking-widest">
              {resume.personal.role}
            </h1>
            <div className="grid grid-cols-2 gap-x-20">
              <div className="flex gap-1">
                <MdMail className="mt-2 fill-white" />
                <span className="text-[12px] text-white my-2">
                  {resume.personal.email}
                </span>
              </div>
              <div className="flex gap-1">
                <FaPhone className="mt-2 fill-white" />
                <span className="text-[12px] text-white my-2">
                  {resume.personal.phone}
                </span>
              </div>
              <div className="flex gap-1">
                <BsLinkedin className="fill-white" />
                <Link
                  href="https://www.linkedin.com/in/rubeenakhatun"
                  className="text-[12px] underline text-white"
                  target="blank"
                >
                  https://www.linkedin.com/in/rubeenakhatun
                </Link>
              </div>
              <div className="flex gap-1">
                <BsGithub className=" fill-white" />
                <Link
                  href="https://github.com/RubeenaKhatun"
                  className="text-[12px] underline text-white"
                  target="blank"
                >
                  https://github.com/RubeenaKhatun
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[55%] h-[257mm] bg-gray-100 px-8 py-1">
            <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17.5px] text-cyan-900 mt-1 mb-2 tracking-widest">
                EXPERIENCE
              </h1>
              {resume.work.map((item) => (
                <div className="mb-4">
                  <div className="flex justify-between">
                    <div className="flex justify-start">
                      <h1 className="text-[13.2px] font-semibold mb-0.5">
                        {item.company}
                      </h1>
                      <div>
                        {item.website && (
                          <span>
                            <a target="blank" href={item.website}>
                              <FaLink className="ml-1 pt-1" />
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                    <h1 className="text-[11px]">
                      {item.from} - {item.to}
                    </h1>
                  </div>
                  <h1 className="text-[12px] font-semibold mb-1">
                    {item.designation}
                  </h1>
                  <div className="text-[12px]">{item.summary.data1}</div>
                  <div className="text-[12px]">{item.summary.data2}</div>
                  {item.summary.data3 && (
                    <div className="text-[12px]">{item.summary.data3}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-b border-cyan-800 py-1 mt-1">
              <h1 className="font-serif text-[17.5px] text-cyan-900 mt-2 mb-2 tracking-widest">
                PROJECTS
              </h1>
              {resume.projects.map((item) => (
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h1 className="text-[13.2px] font-semibold">{item.name}</h1>
                    <h1 className="text-[11px]">{item.from}</h1>
                  </div>
                  <p className="text-[12px]">{item.summary.data}</p>
                </div>
              ))}
            </div>
            <div className="border-b border-cyan-800 py-2">
              <h1 className="font-serif text-[17.5px] text-cyan-900 my-2 tracking-widest">
                EXTRA CURRICULAR ACTIVITIES
              </h1>
              {resume.extra.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <h1 className="text-[13.2px] font-semibold">
                      {item.title}
                    </h1>
                    <h1 className="text-[11px] mt-1">{item.date}</h1>
                  </div>
                  <p className="text-[12px]">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] h-[257mm] px-6 py-2">
            <div className="border-b border-cyan-800 py-2">
              <h1 className="font-serif text-[17.5px] mt-1 mb-1 text-cyan-900 tracking-widest">
                SKILLS
              </h1>
              <div>
                <div className="text-[13.2px] mb-2">
                  <span className="">
                    <span className="font-semibold text-[13.2px]">
                      Languages :{" "}
                    </span>
                    JavaScript, Python, Java, C
                  </span>
                </div>
                <div className="text-[13.2px] mb-2">
                  <span className="">
                    <span className="font-semibold text-[13.2px]">
                      Frameworks :{" "}
                    </span>
                    TailwindCSS, ReactJS, NextJS, Flask
                  </span>
                </div>
                <div className="text-[13.2px] mb-2">
                  <span className="">
                    <span className="font-semibold text-[13.2px]">
                      DataBases :{" "}
                    </span>
                    MongoDB, MySQL
                  </span>
                </div>
                <div className="text-[13.2px] mb-2">
                  <span className="">
                    <span className="font-semibold text-[13.2px]">AWS : </span>
                    EC2, S3, Route53, Elastic Load Balancer
                  </span>
                </div>
                <div className="text-[13.2px] mb-2">
                  <span className="">
                    <span className="font-semibold text-[13.2px]">
                      Tools :{" "}
                    </span>
                    VScode, Github, Vercel
                  </span>
                </div>
                <div className="text-[13.2px] my-1">
                  <span className="font-semibold">
                    Data Structures and Algorithms
                  </span>
                </div>
                {/* <div className="text-[13.2px] mt-2 pb-3">
                  <span className="font-semibold">
                    Software Development Life Cycle
                  </span>
                </div> */}
              </div>
            </div>
            {/* <div className="border-b border-cyan-800 pb-4">
              <h1 className="font-serif text-[17.5px] mt-1 mb-1 text-cyan-900 tracking-widest">
                PROFILE
              </h1>
              <p className="text-[12px] ">{resume.objective}</p>
            </div> */}
            <div className="border-b mt-1 border-cyan-800 py-2">
              <h1 className="font-serif text-[17.5px] my-1 text-cyan-900 tracking-widest">
                EDUCATION
              </h1>
              {resume.education.map((item) => (
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h1 className="text-[13.2px] font-semibold mb-0.5">
                      {item.institution}
                    </h1>
                    {item.startDate && (
                      <h1 className="text-[11px] mt-0.5">
                        {item.startDate} - {item.endDate}
                      </h1>
                    )}
                    {!item.startDate && (
                      <h1 className="text-[11px] mt-0.5">{item.endDate}</h1>
                    )}
                  </div>
                  {item.fieldOfStudy && (
                    <div>
                      <h1 className="text-[11.7px]">
                        <span className="text-[11.7px] font-semibold">
                          {item.typeOfDegree}
                        </span>{" "}
                        {" in "}
                        {item.fieldOfStudy}
                      </h1>
                    </div>
                  )}
                  {item.gpa && (
                    <p className="text-[12px]">
                      <span className="font-semibold">Result</span> - {item.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17.5px] my-2 text-cyan-900 tracking-widest">
                CERTIFICATIONS
              </h1>
              {resume.certifications.map((item) => (
                <div className="mb-2.5">
                  <div className="flex justify-between">
                    <h1 className="text-[13.2px] font-semibold">
                      {item.title}{" "}
                      <span className="text-[11.7px] font-normal italic">
                        {" | "}
                        {item.issuer}
                      </span>
                    </h1>
                    {/* <h1 className="text-[11px]">{item.date}</h1> */}
                  </div>
                  {/* <p className="text-[12px]">{item.issuer}</p> */}
                </div>
              ))}
            </div>
            <div className="border-b. border-cyan-800 py-1 mt-1">
              <h1 className="font-serif text-[17.5px] text-cyan-900 my-2 tracking-widest">
                ACHIEVEMENTS
              </h1>
              {resume.achievements.map((item) => (
                <div className="mb-4">
                  <div className="flex justify-between">
                    <h1 className="text-[13.2px] font-semibold">
                      {item.title}
                    </h1>
                    <h1 className="text-[11px] mt-0.5">{item.date}</h1>
                  </div>
                  <p className="text-[12px]">{item.issuer}</p>
                </div>
              ))}
            </div>
            {/* <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17.5px] mt-1 text-cyan-900 tracking-widest">
                INTRESTS
              </h1>
              <div className="grid grid-cols-2">
                {resume.hobbies.map((item) => (
                  <li className="mb-3 text-[13px] font-semibold">
                    {item.name}{" "}
                  </li>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
