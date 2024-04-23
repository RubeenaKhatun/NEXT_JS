import React from "react";
import { demoResume } from "../../lib/Ali";
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
        <div className="container w-[210mm] min-h-[297mm] bg-white min-w-[210mm]">
          <h1 className="text-3xl font-semibold underline flex justify-center py-2 mt-5 tracking-widest font-serif">
            Resume
          </h1>
          <div className="mx-7 my-2">
            <h1>Candidate Name : Syed Liyakath Ali</h1>
            <h1>Mobile No : 9912927171</h1>
            <h1>Email ID : syedliyakathali0090@gmail.com</h1>
            <h1>
              LinkedIn : https://www.linkedin.com/in/syed-liyakath-ali-9a3931209
            </h1>
            <h1>
              Github : https://github.com/Ali-12345-Ali/Datascience_projects
            </h1>
          </div>
          <div>
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3">
              CAREER OBJECTIVE
            </h1>
            <li className="mx-7 py-1">{resume.objective}</li>
            <li className="mx-7 py-1">{resume.objective1}</li>
            <li className="mx-7 py-1">{resume.objective2}</li>
          </div>
          <div>
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              ACADEMICS
            </h1>
            <div className="mx-7">
              {resume.education.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <li className="font-bold">
                      {item.typeOfDegree + " from " + item.institution}
                    </li>
                    <h1>
                      {item.startDate}
                      {item.endDate && <span>{" - " + item.endDate}</span>}
                    </h1>
                  </div>
                  <h1 className="ml-5">{item.fieldOfStudy}</h1>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              EXPERIENCE
            </h1>
            <div className="mx-7">
              {resume.work.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <li className="font-bold">{item.company}</li>
                    <h1>
                      {item.from}
                      {item.to && <span>{" - " + item.to}</span>}
                    </h1>
                  </div>
                  {item.designation && (
                    <h1 className="ml-5 font-semibold">
                      {"Designation : " + item.designation}
                    </h1>
                  )}
                  <li className="ml-5">{item.summary.data}</li>
                  {item.summary.data1 && (
                    <>
                      <li className="ml-5">{item.summary.data1}</li>
                      <li className="ml-5">{item.summary.data2}</li>
                      <li className="ml-5">{item.summary.data3}</li>
                      <li className="ml-5">{item.summary.data4}</li>
                      <li className="ml-5">{item.summary.data5}</li>
                      <li className="ml-5">{item.summary.data6}</li>
                      <li className="ml-5">{item.summary.data7}</li>
                      <li className="ml-5">{item.summary.data8}</li>
                      <li className="ml-5">{item.summary.data9}</li>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              TECHNICAL SKILLS
            </h1>
            <div className="mx-7 grid grid-cols-2">
              {resume.tskills.map((item) => (
                <div className="mb-1">
                  <div className="flex justify-between">
                    <li className="">{item.name}</li>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              PROJECTS
            </h1>
            <div className="mx-7">
              {resume.projects.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <li className="font-bold">{item.name}</li>
                    <h1>
                      {item.from}
                      {item.to && <span>{" - " + item.to}</span>}
                    </h1>
                  </div>
                  {item.designation && (
                    <h1 className="ml-5">
                      {"Designation : " + item.designation}
                    </h1>
                  )}
                  <h1 className="ml-5">{item.summary.data}</h1>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <h1 className="flex justify-center w-full tracking-widest bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              ACHIEVEMENTS
            </h1>
            <div className="mx-7">
              {resume.achievements.map((item) => (
                <div className="mb-2">
                  <div className="flex justify-between">
                    <li className="">{item.title}</li>
                    <h1>{item.date}</h1>
                  </div>
                  <h1 className="ml-5">{item.issuer}</h1>
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="mb-2">
            <h1 className="flex justify-center w-full bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              PERSONAL DETAILS
            </h1>
            <div className="mx-7">
              <li>Date of Birth : 11-01-2003</li>
              <li>Father's Name : Shaik Abdul Zaheer Ahamed</li>
              <li>Mother's Name : Rukhyya Khatun</li>
              <li>
                Current Address : Flat A604, Mayflower Platinum, Mallapur,
                Hyderabad, 500076.
              </li>
              <li>
                Permanent Address : Flat A604, Mayflower Platinum, Mallapur,
                Hyderabad, 500076.
              </li>
              <li>Hobbies : Sports, Travelling</li>
              <li>Nationality : Indian</li>
              <li>Languages Known : English, Hindi, Telugu, Urdu</li>
              <li>Any kind of disability : No</li>
              <li>Willingness to Relocate : Yes</li>
            </div>
          </div> */}
          {/* <div>
            <h1 className="flex justify-center w-full bg-gray-700 text-white text-xl py-1 mt-3 mb-1">
              DECLARATION
            </h1>
            <h1 className="mx-7 mb-2">
              {" "}
              I hearby declare that all the above mentioned information is true
              and correct to the best of my knowledge.
            </h1>
            <div className="flex justify-between px-7 bg-gray-700">
              <h1 className="text-white py-2 ">Place : Hyderabad</h1>
              <h1 className="text-white py-2">Signature : Rubeena Khatun</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
