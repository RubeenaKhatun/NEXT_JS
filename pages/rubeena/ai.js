import React from "react";
import Link from "next/link";
import { demoResume } from "../../lib/ai";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
            <h1 className="font-serif text-white text-[28px] tracking-widest">
              {resume.personal.firstName} {resume.personal.lastName}
            </h1>
            <h1 className="font-serif text-white text-[13px] pb-1 border-b border-white tracking-widest">
              {resume.personal.role}
            </h1>
            <div className="grid grid-cols-2 ">
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
                  href="https://www.linkedin.com/in/rubeena-khatun-4a8b7a214"
                  className="text-[12px] text-white"
                  target="blank"
                >
                  https://www.linkedin.com/in/rubeena-khatun-4a8b7a214
                </Link>
              </div>
              <div className="flex gap-1">
                <BsGithub className=" fill-white" />
                <Link
                  href="https://github.com/RubeenaKhatun"
                  className="text-[12px] text-white"
                  target="blank"
                >
                  https://github.com/RubeenaKhatun
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[100%]">
          <div className="w-[55%] h-[263mm] bg-gray-100 px-8 py-1">
            <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17px] text-cyan-900 my-1 tracking-widest">
                EXPERIENCE
              </h1>
              {resume.work.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold mb-1">
                      {item.company}
                    </h1>
                    <h1 className="text-[11px]">
                      {item.from} - {item.to}
                    </h1>
                  </div>
                  <h1 className="text-[12px] font-semibold mb-1">
                    {item.designation}
                  </h1>
                  <li className="text-[12px]">{item.summary.data1}</li>
                  <li className="text-[12px]">{item.summary.data2}</li>
                  <li className="text-[12px]">{item.summary.data3}</li>
                </div>
              ))}
            </div>
            <div className="border-b mt-2 border-cyan-800 py-2">
              <h1 className="font-serif text-[17px] mb-1 text-cyan-900 tracking-widest">
                EDUCATION
              </h1>
              {resume.education.map((item) => (
                <div className="mb-3">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold mb-0.5">
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
                    <h1 className="text-[11px] font-semibol">
                      {item.typeOfDegree} in {item.fieldOfStudy}
                    </h1>
                  )}
                  {item.gpa && (
                    <p className="text-[12px]">
                      <span className="font-semibold">Result</span> - {item.gpa}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className=" py-1 mt-1">
              <h1 className="font-serif text-[17px] text-cyan-900 my-2 tracking-widest">
                PROJECTS
              </h1>
              {resume.projects.map((item) => (
                <div className="mb-3">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold">{item.name}</h1>
                    {/* <h1 className="text-[11px]">{item.from}</h1> */}
                  </div>
                  <a
                    className="text-[12px] font-semibold underline"
                    href={item.website}
                    target="blank"
                  >
                    {item.website}
                  </a>
                  <li className="text-[12px]">{item.summary.data1}</li>
                  <li className="text-[12px]">{item.summary.data2}</li>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[45%] h-[257mm] px-7 py-3">
            {/* <div className="border-b border-cyan-800 pb-4">
              <h1 className="font-serif text-[17px] mt-1 mb-1 text-cyan-900 tracking-widest">
                PROFILE
              </h1>
              <p className="text-[12px] ">{resume.objective}</p>
            </div> */}

            <div className="border-b border-cyan-800 py-2">
              <h1 className="font-serif text-[17px] mt-2 mb-1 text-cyan-900 tracking-widest">
                SKILLS
              </h1>
              <div>
                <li className="text-[12px] mb-2">
                  <span className="font-semibold text-[13px]">
                    Programming Languages :{" "}
                  </span>
                  <div className="ml-5 grid grid-cols-2">
                    <li>Python</li>
                    <li>Java</li>
                  </div>
                </li>
                <li className="text-[12px] mb-2">
                  <span className="font-semibold text-[13px]">
                    Machine Learning :{" "}
                  </span>
                  <a
                    href={`https://github.com/RubeenaKhatun/ML_Algorithms.git`}
                    target="blank"
                    className="ml-5 underline font-semibold"
                  >
                    https://github.com/RubeenaKhatun/ML_Algorithms.git
                  </a>
                  <div className="ml-5 grid grid-cols-2">
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                  </div>
                </li>
                <li className="text-[12px] mb-2">
                  <span className="font-semibold text-[13px]">
                    Natural Language Processing :{" "}
                  </span>
                  <a
                    href={`https://github.com/RubeenaKhatun/NLP.git`}
                    target="blank"
                    className="ml-5 underline font-semibold"
                  >
                    https://github.com/RubeenaKhatun/NLP.git
                  </a>
                  <div className="ml-5 grid grid-cols-2">
                    <li>Text preprocessing</li>
                    <li>POS tagging</li>
                    <li>Sentiment analysis</li>
                    <li>Text classification</li>
                  </div>
                </li>

                <li className="text-[12px] my-1">
                  <span className="font-semibold">
                    Data Structures and Algorithms
                  </span>
                </li>
                <li className="text-[12px] mt-1 pb-3">
                  <span className="font-semibold">
                    Software Development Life Cycle
                  </span>
                </li>
              </div>
            </div>
            <div className="border-b border-cyan-800 py-1 mt-1">
              <h1 className="font-serif text-[17px] text-cyan-900 my-2 tracking-widest">
                ACHIEVEMENTS
              </h1>
              {resume.achievements.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold">{item.title}</h1>
                    {/* <h1 className="text-[11px]">{item.date}</h1> */}
                  </div>
                  <p className="text-[12px]">{item.issuer}</p>
                </div>
              ))}
            </div>
            <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17px] my-1 text-cyan-900 tracking-widest">
                CERTIFICATIONS
              </h1>
              {resume.certifications.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold">
                      {item.title}{" "}
                      <span className="font-normal">from {item.issuer}</span>
                    </h1>
                    {/* <h1 className="text-[11px]">{item.date}</h1> */}
                  </div>
                  {/* <p className="text-[12px]">{item.issuer}</p> */}
                </div>
              ))}
            </div>
            <div className="border-b. border-cyan-800 py-2">
              <h1 className="font-serif text-[17px] text-cyan-900 my-2 tracking-widest">
                EXTRA CURRICULAR ACTIVITIES
              </h1>
              {resume.extra.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <h1 className="text-[13px] font-semibold">{item.title}</h1>
                    {/* <h1 className="text-[11px] mt-1">{item.date}</h1> */}
                  </div>
                  <p className="text-[12px]">{item.issuer}</p>
                </div>
              ))}
            </div>
            {/* <div className="border-b border-cyan-800 py-2 mt-1">
              <h1 className="font-serif text-[17px] mt-1 text-cyan-900 tracking-widest">
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
