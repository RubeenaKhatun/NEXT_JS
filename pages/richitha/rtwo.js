import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function index() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-pink-100 h-[290mm] align-middle justify-center ">
        <div className="bg-gray-50 w-[210mm] h-[297mm] m-2  mx-auto">
          <div className="flex-grow space-x-2 border-separate">
            <div className="flex pt-3 pb-2  bg-black border-solid text-black  ">
              <img
                className="w-[20%] h-[30] p-3 pb-5 pl-7  "
                src="https://randomuser.me/api/portraits/women/71.jpg"
              ></img>

              <div className="pt-5">
                <p className=" text-center text-white text-4xl pl-9 tracking-wide font-serif m-4 mt-5 ml-8">
                  {resume.personal.firstName} {resume.personal.lastName}
                </p>
                <p className="  text-3xl  text-white justify pl-[14%] text tracking-wider font-thin mb-3 ml-11">
                  {resume.personal.role}
                </p>
              </div>
              <div>
                <div className=" pb-2 rounded-md flex bg-gray-50 m-14">
                  {resume.social.map((item) => (
                    <div className="mx-3 mt-2 ">
                      <span>
                        <Link href={item.url}>
                          <img
                            src={
                              "https://www." + item.network + ".com/favicon.ico"
                            }
                            className="w-5 "
                          />
                        </Link>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex m-5">
            <div className="flex w-[60%]">
              <div className="flex-col">
                <div className="flex-col bg-gray-50 ">
                  <div className=" m-4 ">
                    <p className="bg-gray-800 text-white p-1 rounded-md mt-3 text-center">
                      PROFILE
                    </p>
                    <p className="text-sm p-1 pt-4">{resume.objective}</p>
                  </div>
                  <div>
                    {/* <span className=" bg-black text-white pt-1 p-1 rounded-sm">
                  PERSONAL
                </span> */}
                    {/* <p className="text-sm from-neutral-700 p-1">
                  {resume.personal.phone}
                </p> */}

                    {/* <div className="text-sm">
                  <p className="text-m font-medium ">HOBBIES</p>
                  {resume.hobbies.map((item) => (
                    <div>
                      <p>{item.name}</p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div> */}

                    {/* <div className="text-sm">
                  <p className="text-m font-semibold">LANGUAGES</p>
                  {resume.languages.map((item) => (
                    <div>
                      <p>
                        {item.name} : {item.fluency}
                      </p>
                      <p>{item.enabled}</p>
                    </div>
                  ))}
                </div> */}
                    <div className="p-2 ">
                      <p className="bg-gray-800 text-center rounded-md text-white p-1 m-1 ">
                        EDUCATION
                      </p>

                      {resume.education.map((item) => (
                        <div className="text-base p-2">
                          <p className="font-semibold">{item.institution}</p>
                          <p>
                            {" "}
                            [{item.startDate}] - [{item.endDate}]
                          </p>
                          <p>{item.fieldOfStudy}</p>
                          <p>{item.typeOfDegree}</p>
                          <p>{item.gpa}</p>
                          <p>{item.summary.enabled}</p>
                          <p>{item.enabled}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-2">
                      <p className="bg-gray-800 rounded-md text-center text-white p-1 mx-2 my-1">
                        SKILLS
                      </p>
                      {resume.skills.map((item) => (
                        <div className="pt-2">
                          <span className="text-base font-semibold p-2">
                            {item.name} - {item.level}
                          </span>
                          <p>{item.enabled}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="  p-3">
                    <p className="bg-gray-800 rounded-md text-center text-white p-1 mx-2 my-1">
                      PROJECTS
                    </p>
                    {resume.projects.map((item) => (
                      <div className="p-1 ">
                        <Link href={item.website}>
                          <p className="font-bold text-lg tracking-wider">
                            {item.name}
                          </p>
                        </Link>

                        {/* <p>{item.summary.data}</p> */}
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex w-[60%] p-3">
              <div className="bg-gray-50 ">
                <p className="bg-gray-800 text-white mt-1 p-1 text-center rounded-md ">
                  WORK
                </p>
                {resume.work.map((item) => (
                  <div className="m-2">
                    <Link href={item.website}>
                      <p className=" font-bold text-lg tracking-wider">
                        {item.company}{" "}
                      </p>
                    </Link>
                    <p>
                      [ {item.from}] - [{item.to}]
                    </p>
                    <p>{item.designation}</p>
                    {/* <p>{item.summary.data}</p> */}
                    <p>{item.summary.enabled}</p>
                  </div>
                ))}
                <div>
                  <div className="mt-5">
                    <p className="bg-gray-800 rounded-md text-center  text-white p-1 m-1 ">
                      AWARDS
                    </p>
                    {resume.awards.map((item) => (
                      <div className="text-sm pt-4">
                        <p className="font-semibold">
                          {item.name} - [{item.date}]
                        </p>
                        <p>{item.awarder}</p>

                        {/* <p>{item.summary.data}</p> */}
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <p className="bg-gray-800 rounded-md mt-2 text-center text-white p-1 m-1 ">
                      CERTIFICATION
                    </p>
                    {resume.certifications.map((item) => (
                      <div className="pt-4">
                        <p className="font-semibold">
                          {item.title} [{item.date}]
                        </p>
                        <p></p>
                        <p>{item.issuer}</p>
                        {/* <p>{item.summary.data}</p> */}
                        <p>{item.summary.enabled}</p>
                        <p>{item.enabled}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
