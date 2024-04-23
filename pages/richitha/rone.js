import React from "react";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function Home() {
  const resume = demoResume();
  return (
    <>
      <div className="bg-slate-200 h-[290mm] align-middle justify-center ">
        <div className="bg-gray-300 w-[210mm]  h-[292mm] overflow-auto drop-shadow-2xl  min-w-[210mm]">
          <div className="m-4 mt-10 mb-5  ">
            <div className="flex ml-4 mr-4 space-x-3 ">
              <div className="w-[37%] bg-white rounded-md p-3 ">
                {/* personal details */}
                <div>
                  <div>
                    <img
                      className="w-[85%] h-[30] p-1 pl-7 ml-4  pb-2 bg- rounded-lg"
                      src="https://randomuser.me/api/portraits/women/71.jpg"
                    ></img>
                    <p className="font-semibold text-2xl text pl-2 pb-1 font-sans tracking-wide text-center">
                      {resume.personal.firstName} {resume.personal.lastName}
                    </p>
                    {/* <p className="text-sm">{resume.personal.dob}</p> */}

                    {/* <p className="text-sm">{resume.personal.email}</p> */}
                    <div>
                      <div className=" pb-2 flex bg-gray-200 rounded-full">
                        {resume.social.map((item) => (
                          <div className="mx-3 mt-2  justify-around">
                            <span>
                              <Link href={item.url}>
                                <img
                                  src={
                                    "https://www." +
                                    item.network +
                                    ".com/favicon.ico"
                                  }
                                  className="w-5 "
                                />
                              </Link>
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm pt-2 from-neutral-700">
                        {resume.personal.phone}
                      </p>

                      <div className="text-sm">
                        <p className="text-m font-medium ">HOBBIES</p>
                        {resume.hobbies.map((item) => (
                          <div>
                            <p>{item.name}</p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                      <div className="text-sm">
                        <p className="text-m font-medium ">SKILLS</p>
                        {resume.skills.map((item) => (
                          <div>
                            <span className="text-sm">
                              {item.name} - {item.level}
                            </span>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>

                      <div className="text-sm">
                        <p className="text-m font-semibold">LANGUAGEs</p>
                        {resume.languages.map((item) => (
                          <div>
                            <p>
                              {item.name} : {item.fluency}
                            </p>
                            <p>{item.enabled}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* objective */}

              <div className="bg-white w-[70%]  rounded-md p-3 ">
                <p className="font-semibold text-3xl p-2 pb-3 bg-gray-200 rounded-full text-center">
                  {resume.personal.role}
                </p>

                <span className="font-bold  m-2 rounded tracking-wide">
                  PROFILE
                </span>
                <br></br>
                <div>
                  <p className="text-sm">{resume.objective}</p>
                </div>
                <hr className="m-2"></hr>
                <div>
                  <p className="font-bold  m-2 rounded ">AWARDS</p>
                  {resume.awards.map((item) => (
                    <div className="text-sm p-1">
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
              </div>
            </div>
          </div>
          <div className="flex space-x-3 m-4 ">
            <div className="b-[60%] rounded-md ml-4 mr-1 bg-white p-2">
              <p className="font-bold  m-2 tracking-wide ">EDUCATION</p>
              {resume.education.map((item) => (
                <div className="text-sm p-1">
                  <p className="font-semibold">
                    {item.institution} [{item.startDate} - {item.endDate}]
                  </p>
                  <p>{item.fieldOfStudy}</p>
                  <p>{item.typeOfDegree}</p>
                  <p>{item.gpa}</p>

                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>
            <div className="bg-white w-[47%] rounded-md p-3 pr-1 ">
              <p className="font-bold tracking-wide  ">WORK</p>
              <p className="p-2"></p>
              {resume.work.map((item) => (
                <div>
                  <Link href={item.website}>
                    <p className="text-blue-400">{item.company} </p>
                  </Link>
                  <p>
                    {" "}
                    [ {item.from}] - [{item.to}]
                  </p>
                  <p>{item.designation}</p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-3 m-4 ">
            <div className="bg-white w-[40%] rounded-md ml-4 p-2">
              <p className="font-bold tracking-wide m-2">PROJECTS</p>
              {resume.projects.map((item) => (
                <div className="p-1">
                  <Link href={item.website}>
                    <p className="text-black font-bold">{item.name}</p>
                  </Link>
                  <p>
                    [{item.from}]- [{item.to}]
                  </p>
                  {/* <p>{item.summary.data}</p> */}
                  <p>{item.summary.enabled}</p>
                  <p>{item.enabled}</p>
                </div>
              ))}
            </div>

            <div className="bg-white w-[54%] rounded-md ml-5 p-2">
              <p className="font-bold  m-2 tracking-wide">CERTIFICATION</p>
              {resume.certifications.map((item) => (
                <div>
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
    </>
  );
}
