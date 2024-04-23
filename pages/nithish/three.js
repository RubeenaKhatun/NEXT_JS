import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";
export default function three() {
  var resume = demoResume();
  return (
    <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
      <div className="bg-slate-50 w-[210mm] h-[292mm]  overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
        <div className="h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10 ">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            alt=""
            className="rounded-full h-40 mb-5 mx-auto"
          />
          <>
            <div className="flex">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                  className="w-5 h-5"
                />
              </span>
              <h1 className="mx-4">{resume.personal.phone}</h1>
            </div>
            <div className="flex my-1">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                  className="w-7 h-7"
                />
              </span>
              <h1 className="mx-2">{resume.personal.email}</h1>
            </div>
            {resume.social.map((item) => (
              <div className="my-3 flex">
                <span>
                  <img
                    src={"https://www." + item.network + ".com/favicon.ico"}
                    alt=""
                    srcset=""
                    className="w-5 grayscale-[40%]"
                  />
                </span>

                <Link href={item.url}>
                  <span className="mx-4">{item.username}</span>
                </Link>
              </div>
            ))}
          </>
          <h1 className="text-2xl font-semibold tracking-[2px] mt-5">SKILLS</h1>

          <div className="my-2">
            {resume.skills.map((item) => (
              <div className="flex">
                <h1 className="">{item.name}</h1>
                <p className="absolute right-5">{item.level}</p>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-semibold tracking-[2px] mt-5">
            LANGUAGES
          </h1>
          <div className="my-2">
            {resume.languages.map((item) => (
              <div className="flex">
                <h1 className="">{item.name}</h1>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-semibold tracking-[2px] mt-5">AWARDS</h1>
          <div className="my-2">
            {resume.awards.map((item) => (
              <div className="flex">
                
                <span className=" text-[15px] my-1">
                  {item.name}{" "}
                  <span className="">({item.date.slice(0, 4)})</span>
                </span>
              </div>
            ))}
          </div>
          {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {resume.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
          <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">CERTIFICATIONS</h1>
            {resume.certifications.map((item) => (
              <p className="my-2">{item.title}</p>
            ))}
          </div>
        </div>
        <div className="w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10">
                    <h1 className="text-3xl ml-[50%] font-bold tracking-widest">{resume.personal.firstName} <span>{resume.personal.lastName}</span></h1>
                    <h1 className="ml-[58%] my-2 tracking-widest">{resume.personal.role}</h1>
                    <div className="absolute mt-10  left-[330px] w-[57%] h-[100%]">
                    <h1 className='text-xl font-bold tracking-[1px]' >EDUCATION</h1>
                    {
                        resume.education.map(item=>(
                            <div className="mt-4">
                          <h1 className="font-semibold">{item.institution} <span className="font-medium">({item.startDate.slice(0,4)}-{item.endDate.slice(0,4)})</span> </h1> 

                          <p className="ml-5">{item.typeOfDegree}</p>
                          <p className="ml-5 my-1">{item.summary.data}</p>
                          <p className="ml-5">GPA-{item.gpa}</p>
                            </div>
                        ))

                    }


                <h1 className='text-xl font-bold tracking-[1px] mt-4' >WORK</h1>
                    {
                        resume.work.map(item=>(
                            <div className="mt-4">
                          <h1 className="font-semibold">{item.company} <span className="font-medium">({item.from.slice(0,4)}-{item.to.slice(0,4)})</span> </h1> 

                          <span className="ml-5 tracking-wider font-semibold">{item.designation}</span>
                          <span className="ml-5 text-sm">{item.summary.data}</span>
                            </div>
                        ))
                    }
                <h1 className='text-xl font-bold tracking-[1px] mt-4' >PROJECTS</h1>
                {
                    resume.projects.map(item=>(
                        <div className="mt-4">
                      <Link href={item.website}><h1 className="font-semibold">{item.name} <span className="font-medium">({item.from.slice(0,4)}-{item.to.slice(0,4)})</span> </h1> </Link>

                      {/* <span className="ml-5 tracking-wider font-semibold">{item.designation}</span> */}
                      <span className="ml-5 text-sm">{item.summary.data}</span>
                        </div>
                    ))
                }
                    </div>
        </div>
        
      </div>
    </div>
  );
}
