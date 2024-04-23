import React from "react";
import { demoResume } from "../../lib/data";
import Link from "next/link";

export default function four() {
  const resume = demoResume();
  return (
    <div className="bg-gray-300 flex align-middle justify-center h-[290mm]">
      <div className="bg-slate-50 w-[210mm] h-[285mm] m-5 overflow-auto drop-shadow-2xl flex flex-row min-w-[210mm]">
        <div className="w-[35%] z-10 bg-slate-800 h-[100] p-5">
          <div className="mt-44">
            <h1 className="text-2xl  tracking-[2px] text-white">CONTACT</h1>
            <hr className="h-[2px] bg-black my-2" />
            <div className="flex">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/phone-icon-16.png"
                  className="w-5 h-5"
                />
              </span>
              <h1 className="mx-4 text-white">{resume.personal.phone}</h1>
            </div>
            <div className="flex my-1">
              <span>
                <img
                  src="https://www.freeiconspng.com/uploads/icon-email-icon-clip-art-at-clker-com-vector-qafaq-e-mail-icon-trace--0.png"
                  className="w-7 h-7"
                />
              </span>
              <h1 className="mx-2 text-white">{resume.personal.email}</h1>
            </div>
            {resume.social.map((item) => (
              <div className="my-3 flex">
                <span>
                  <img
                    src={"https://www." + item.network + ".com/favicon.ico"}
                    alt=""
                    srcset=""
                    className="w-5 grayscale-[40%]   "
                  />
                </span>

                <Link href={item.url}>
                  <span className="mx-4 text-white">{item.username}</span>
                </Link>
              </div>
            ))}
            <h1 className="text-2xl mt-4 tracking-[2px] text-white">SKILLS</h1>
            <hr className="h-[2px] bg-black my-2" />

            <div>
              {resume.skills.map((item) => (
                <div className="flex">
                <p className="mx-1   text-white my-2 w-[70%] text-sm">{item.name}</p>
                {   
                    item.level=="Beginner" && 
                    // <p className="text-white"></p>   
                    <div className="w-[40%] h-2 relative rounded-md left-0 bg-white   mt-5">
                        <div className="w-[66%] absolute right-0 bg-black h-2"></div>
                    </div>
                }
                {
                    item.level == "Intermediate" &&
                    <div className="w-[40%] h-2 relative rounded-md left-0 bg-white  mt-5">
                    <div className="w-[33%] absolute right-0 bg-black h-2"></div>
                </div> 

                }
                {
                    item.level == "Expert" &&
                    <div className="w-[40%] h-2 relative rounded-md  left-0 bg-white  mt-5">
                    <div className="w-[1%] absolute right-0 bg-black h-2"></div>
                </div> 
                    // <p className="text-white">exp</p>  

                    

                }
                </div>
                
              ))}
            </div>

            <div className="mt-5">
              <h1 className="text-2xl  text-white  tracking-[2px]">
                LANGUAGES
              </h1>
              <hr className="h-[2px] my-1" />
              {resume.languages.map((item) => (
                <p className="my-2 text-white">{item.name}</p>
              ))}
            </div>

            <h1 className="text-2xl  tracking-[2px] text-white mt-5">
              AWARADS
            </h1>
            <hr className="h-[2px] bg-black mt-1 mb-4 " />
            {resume.awards.map((item) => (
              <div className="my-2">
                <span className="font-semibold text-[15px] text-white">
                  {item.name} ({item.date.slice(0, 4)})
                </span>

                <p className="mx-4 text-white opacity-60">
                  {item.summary.data.slice(0, 38)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[65%] z-10 bg-slate-300 p-5">
          <div className="mt-48">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        OBJECTIVE
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
            <p className="text-sm">{resume.objective}</p>
          </div>
          <div className="mt-5">
                <div className="flex">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        EDUCATION
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
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
          </div>
          <div className="mt-5">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        PROJECTS
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
                {
                    resume.projects.map(item=>(
                        <div className="mt-4">
                      <Link href={item.website}><h1 className="font-semibold">{item.name} <span className="font-medium">({item.from.slice(0,4)}-{item.to.slice(0,4)})</span> </h1> </Link>

                      <span className="ml-5 text-sm">{item.summary.data}</span>
                        </div>
                    ))
                }
          </div>
          <div className="mt-2">
                <div className="flex mb-2">
                    <h1 className="text-xl font-semibold tracking-[1px]">
                        CERTIFICATIONS
                    </h1>
                    <hr className=" h-[2px] w-[100%] ml-2 mt-3 bg-black" />
                </div>
                {resume.certifications.map((item) => (
              <p className="my-2">{item.title}</p>
            ))}
          </div>
          
          
        </div>

        <div className="absolute w-[100%] h-28 bg-cyan-800 z-20 top-9 flex">
          <div>
            {
              <>
                <h1 className="text-3xl mt-7 ml-24 font-semibold tracking-widest text-white ">
                  {resume.personal.firstName.concat(
                    "  " + resume.personal.lastName
                  )}
                </h1>
                <p className="mt-2 ml-36 tracking-widest text-white">
                  {resume.personal.role}
                </p>
              </>
            }
          </div>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/40.jpg"
          alt=""
          className=" absolute top-6 right-10 z-30 h-32 rounded-full border-white border-4  "
        />
      </div>
    </div>
  );
}
