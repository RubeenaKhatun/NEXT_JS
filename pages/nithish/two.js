import React from "react";
import { demoResume } from "../../lib/data";
import Image from "next/image";
import Link from "next/link";

export default function two() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-gray-300 flex align-middle justify-center h-[285mm]">
        <div className="bg-slate-50 w-[210mm] h-[285mm] overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
          <div className=" w-[35%] bg-gray-200 p-6">
            <div className="bg-slate-800 w-36 h-[200px] absolute top-0 left-0">
              <img
                src="https://randomuser.me/api/portraits/men/40.jpg"
                alt=""
                className="w-36 h-36 mt-7 ml-10 border-8 border-white"
              />
            </div>
            <div className="mt-48">
              <h1 className="text-[16px] font-semibold tracking-[2px]">
                CONTACT
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {
                <>
                  <div className="flex">
                    <span>
                      <img
                        src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                        className="w-5 h-5"
                      />
                    </span>
                    <h1 className="mx-4 text-[12px] ">
                      {resume.personal.phone}
                    </h1>
                  </div>
                  <div className="flex my-1">
                    <span>
                      <img
                        src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                        className="w-7 h-7"
                      />
                    </span>
                    <h1 className="mx-2 text-[12px] ">
                      {resume.personal.email}
                    </h1>
                  </div>
                  {resume.social.map((item) => (
                    <div className="my-3 flex">
                      <span>
                        <img
                          src={
                            "https://www." + item.network + ".com/favicon.ico"
                          }
                          alt=""
                          srcset=""
                          className="w-5 grayscale-[40%]"
                        />
                      </span>

                      <Link href={item.url}>
                        <span className="mx-4 text-[12px]">
                          {item.username}
                        </span>
                      </Link>
                    </div>
                  ))}
                </>
              }
            </div>
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold tracking-[2px]">
                SKILLS
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.skills.map((item) => (
                <li className="mx-4 text-[12px] ">{item.name}</li>
              ))}
            </div>

            <div>
              <h1 className="text-[16px] font-semibold tracking-[2px]">
                AWARADS
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.awards.map((item) => (
                <div className="my-2">
                  <span className="font-semibold text-[12px]">
                    {item.name} ({item.date.slice(0, 4)})
                  </span>
                  <span className="mx-2 text-[12px]"></span>
                  <p className="mx-4 text-[12px]">
                    {item.summary.data.slice(0, 38)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold tracking-[2px]">
                LANGUAGES
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.languages.map((item) => (
                <p className="my-2 text-[12px]">{item.name}</p>
              ))}
            </div>
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold tracking-[2px]">
                HOBBIES
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              {resume.hobbies.map((item) => (
                <p className="my-2 text-[12px]">{item.name}</p>
              ))}
            </div>
          </div>
          <div className=" w-[70%] pt-10 px-5 ">
            <div>
              <h1 className="text-[25px] font-semibold tracking-wider">
                {resume.personal.firstName}
              </h1>
              <h1 className="text-[25px]  tracking-[4px] mt-2">
                {resume.personal.lastName}
              </h1>
              <h1 className="text-[20px]  tracking-[4px] mt-2">
                {resume.personal.role}
              </h1>
            </div>

            <div className="mt-12">
              <h1 className="text-[16px] font-bold tracking-[1px]">
                OBJECTIVE
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              <p className="text-[12px]">{resume.objective}</p>

              <h1 className="text-[16px] font-bold tracking-[1px] mt-5">
                WORK
              </h1>
              <hr className="h-[2px] bg-black my-1" />

              <div className="ml-1 mt-1">
                {resume.work.map((item) => (
                  <div className="flex">
                    <div className="pt-1">
                      <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                      <div className="w-1 bg-black h-32 m-1"></div>
                    </div>
                    <div className="ml-5 mt-1">
                      <p className="font-semibold text-[12px]">
                        {item.from.slice(0, 4)} - {item.to.slice(0, 4)}
                      </p>
                      <p className="tracking-[2px] my-1 text-[12px]">
                        {item.company}
                      </p>
                      <p className="font-bold text-[12px]">
                        {item.designation}
                      </p>
                      <p className="mb-4 text-[12px]">{item.summary.data}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-[16px] font-bold tracking-[1px] mt-3">
                EDUCACTION
              </h1>
              <hr className="h-[2px] bg-black my-1" />
              <div className="ml-1 mt-1">
                {resume.education.map((item) => (
                  <div className="flex">
                    <div className="flex">
                      <div className="pt-1">
                        <div className="w-3 bg-black h-3 rounded-full opacity-60"></div>
                        <div className="w-1 bg-black h-28 m-1"></div>
                      </div>
                      <div className="ml-5 mt-1">
                        <p className="font-semibold text-[12px]">
                          {item.startDate.slice(0, 4)} -{" "}
                          {item.endDate.slice(0, 4)}
                        </p>
                        <p className="tracking-[2px] text-[12px]">
                          {item.institution}
                        </p>
                        <p className="font-bold text-[12px]">
                          {item.fieldOfStudy}
                        </p>
                        <p className="text-[12px]">{item.typeOfDegree}</p>
                        <p className="mb-4 text-[12px] font-semibold">
                          GPA-{item.gpa}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
