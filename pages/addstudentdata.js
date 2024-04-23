import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import swal from "sweetalert";
import axios from "axios";
import crypto from "crypto";
import { toast } from "react-toastify";
import { useModelContext } from "../../../../src/context/ModalContext";
import { Loading } from "../../../../src/components/Reusables/Loading";
import { getLoginSession } from "../../../../src/lib/auth";
import { findUser } from "../../../../src/lib/user";
import { useResumeContext } from "../../../../src/context/ResumeContext";
import { MdFileUpload } from "react-icons/md";

const CSV_to_DB = ({ userDetails, displayDetails }) => {
  const user = JSON.parse(userDetails);
  console.log("user is", user);
  const [btn, setbtn] = useState("Submit Data");
  const { loading, setLoading } = useModelContext();
  console.log("dis", displayDetails);
  const [attributes, setattributes] = useState([]);
  const [sorted, setsorted] = useState([]);
  const [arrayitems, setarrayitems] = useState([]);
  const [data, setdata] = useState([]);
  const [payment, setpayment] = useState();
  const [education, seteducation] = useState([]);
  const [personal, setpersonal] = useState([]);
  const date = new Date();

  const { modules, setmodules } = useResumeContext();
  const currentDate = new Date();
  var allModules = [];
  var flag = false;

  displayDetails[0].payment.history.map((pay) => {
    if (pay.expiryDate) {
      console.log("inside");
      const expDate = new Date(pay.expiryDate);
      if (expDate > currentDate) {
        pay.modules.map((module) => {
          allModules.push(module);
        });
      }
    } else {
      pay.modules.map((module) => {
        allModules.push(module);
      });
    }
    flag = true;
  });

  useEffect(() => {
    setmodules(allModules);
  }, [flag]);

  console.log(allModules);

  const findHistory = (a) => {
    for (var i = 0; i < a.length; i++) {
      if (a[i] > 0) {
        return "H";
      }
    }
    return "NH";
  };

  const parseFile = (event) => {
    setLoading(true);
    Papa.parse(event.target.files[0], {
      header: true,
      complete: (results) => {
        setdata(results.data);
        console.log(results.data);
      },
    });
    console.log("data", data);
  };

  useEffect(() => {
    if (data) {
      arrangeData();
    }
  }, [data]);

  const arrangeData = async () => {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync("Provast@123", salt, 1000, 64, "sha512")
      .toString("hex");
    const arr = new Array();
    const educationArray = new Array();
    const payArr = new Array();
    const dataArray = new Array();
    const att = new Array();
    const personalArray = new Array();
    for (const key in data[0]) {
      if (key != "hash" || key != "salt") {
        if (data[0].hasOwnProperty(key)) {
          att.push(key);
        }
      }
    }
    console.log("att", att);
    setattributes(att);

    for (var i = 0; i < data.length - 1; i++) {
      console.log(data[i]);
      const itemarray = new Array();
      console.log("Inside");
      for (const key in data[i]) {
        if (key != "hash" || key != salt) {
          if (data[i].hasOwnProperty(key)) {
            if (data[i][key] === undefined) {
              itemarray.push("ND");
            }
            itemarray.push(data[i][key]);
          }
        }
      }

      dataArray.push(itemarray);

      function validateEmail(email) {
        console.log("email in st", email);
        const atIndex = email.indexOf("@");
        if (atIndex === -1 || atIndex === 0 || atIndex === email.length - 1) {
          return false;
        }

        const dotIndex = email.lastIndexOf(".");
        if (
          dotIndex === -1 ||
          dotIndex < atIndex ||
          dotIndex === email.length - 1
        ) {
          return false;
        }

        return true;
      }

      if (data[i]["Student Mail ID"] === undefined) {
        data[i]["Student Mail ID"] = data[i]["College Mail ID"];
      }
      if (data[i]["College Mail ID"] === undefined) {
        console.log("inside college");
        data[i]["College Mail ID"] = data[i]["Student Mail ID"];
      }
      if (
        validateEmail(data[i]["Student Mail ID"]) == false ||
        validateEmail(data[i]["College Mail ID"]) == false
      ) {
        toast.error("Mail IDs is Incorrect in Row" + (i + 1), {
          toastId: "Mail IDs is Incorrect",
        });
        return;
      }
      if (data[i]["Alternative Mobile Number"] === undefined) {
        data[i]["Alternative Mobile Number"] = data[i]["Student Mobile"];
      }
      console.log("mail in add", data[i]["Student Mail ID"]);
      const stat = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/user/checkmail`,
        { email: data[i]["Student Mail ID"] }
      );
      console.log("stat", stat);
      if (stat.data.status === "Ok") {
        toast.error(
          data[i]["College Mail ID"] + " Already Registered with Provast"
        );
      }

      const item = {
        email: data[i]["College Mail ID"],
        personalemail: data[i]["Student Mail ID"],
        hash: hash,
        salt: salt,
        placed: false,
        detailsAvailable: true,
        academicsAvailable: true,
        profile: {
          firstName: data[i]["First Name"],
          middleName: data[i]["Middle Name"],
          lastName: data[i]["Last Name"],
          verified: true,
          frozen: false,
        },
        phone: {
          value: data[i]["Student Mobile"],
          verified: true,
          frozen: false,
        },
        approved: true,
        category: "student",
        rollNumber: {
          value: data[i]["RollNo."],
          verified: true,
          frozen: false,
        },
        college: {
          name: user.college.name,
          code: user.college.code,
          campus: "test",
          program: "test",

          specialisation: "ts",
          passphrase: "cvr123",
        },
      };

      const per = {
        contact: {
          parents: {
            father: {
              name: data[i]["Father's Name\n(as per SSC)"],
            },
            mother: {
              name: data[i]["Mother's Name\n(as per SSC)"],
            },
          },
          address: data[i]["Address"],
        },
        details: {
          aadhar: Number(data[i]["AADHAR No"]),
          pan: data[i]["PAN Number"],
          alternativeNumber: data[i]["Alternate Mobile number"],
          dob: new Date(data[i]["Date of Birth \nas per SSC"]),
          gender: data[i]["Gender"],
        },
      };

      const education = {
        quota: data[i]["EAMCET/JEE"],
        marks: {
          ssc: {
            maxmarks: data[i]["SSC MAX MARKS"],
            sscmarks: data[i]["SSC MARKS"],
            sscpercentage: data[i]["SSC %"],
            yearofpass: data[i]["SSC YEAR OF PASSING"],
          },
          inter: {
            maxmarks: data[i]["INTER MAX MARKS"],
            intermarks: data[i]["INTER MARKS"],
            interpercentage: data[i]["INTER %"],
            yearofpass: data[i]["INTER YEAR OF PASSING"],
          },

          bachelors: {
            semester: [
              {
                gpa: data[i]["B.Tech I Year I Sem"],
                backlogs: data[i]["Backlogs"],
              },
              {
                gpa: data[i]["B.Tech I Year II Sem"],
                backlogs: data[i]["Backlogs_1"],
              },
              {
                gpa: data[i]["B.Tech II Year I Sem"],
                backlogs: data[i]["Backlogs_2"],
              },
              {
                gpa: data[i]["B.Tech I Year II Sem"],
                backlogs: data[i]["Backlogs_3"],
              },
              {
                gpa: data[i]["B.Tech III Year I Sem"],
                backlogs: data[i]["Backlogs_4"],
              },
              {
                gpa: data[i]["B.Tech III Year II Sem"],
                backlogs: data[i]["Backlogs_5"],
              },
              {
                gpa: data[i]["B.Tech IV Year I Sem"],
                backlogs: data[i]["Backlogs_6"],
              },
              {
                gpa: data[i]["B.Tech IV Year II Sem"],
                backlogs: data[i]["Backlogs_7"],
              },
            ],
            cgpa: data[i]["CGPA"],
            percentage: data[i]["% Formula"],
            totalbacklogs: data[i]["Total Backlogs"],
            history: null,
          },
        },
      };

      const pay = {
        paymentId: "testing",
        amount: "250",
        orderId: "testorder",
        college: data[i].collegename,
        email: data[i]["Student Mail ID"],
        phone: data[i]["Student Mobile"],
        category: "CPAID",
        plan: "Premium",
        modules: allModules,
        expiryDate: date.setFullYear(date.getFullYear() + 1),
      };

      arr.push(item);
      educationArray.push(education);
      payArr.push(pay);
      personalArray.push(per);
    }
    console.log("sorted");
    setsorted(arr);
    setarrayitems(dataArray);
    setpayment(payArr);
    seteducation(educationArray);
    setpersonal(personalArray);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    setbtn("Submitting...");
    setLoading(true);
    e.preventDefault();
    console.log(sorted);
    console.log(payment);
    console.log("Array items", arrayitems);
    console.log(attributes);
    try {
      const status = axios.post(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/addbulkstudents`,
        { sorted, payment, education, personal }
      );
      if (status) {
        setLoading(false);
        toast.success("Data Added into the DataBase");
        setbtn("Submitted");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="mt-24 flex justify-center">
        <label className="w-64 mr-6  flex flex-col items-center px-2 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border-neutral-800 border-2 border-blue cursor-pointer hover:bg-neutral-200">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <MdFileUpload size={20} className="my-auto mr-3" />
            {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
          </svg>
          <span className="mt-2 text-sm leading-normal">Select a file</span>
          <input
            type="file"
            name="file"
            placeholder="Upload Only CSV"
            className="hidden"
            onChange={parseFile}
          />
        </label>

        <button
          className="bg-orange-500 rounded-lg h-11 my-auto px-4 py-2 mx-2 hover:opacity-90"
          onClick={handleSubmit}
        >
          {btn}
        </button>
      </div>
      {sorted && (
        <div className="overflow-auto mt-8">
          <table className="table-row overflow-scroll border border-collapse border-slate-400">
            <thead className="font-medium">
              <tr className="h-3 border-slate-300 hover:bg-neutral-100">
                {attributes.map((item) => {
                  return (
                    <>
                      <td
                        scope="col"
                        className="px-6 py-4 text-sm tracking-wider font-semibold border border-slate-500 bg-orange-500 whitespace-nowrap"
                      >
                        {item}
                        {/* <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 ml-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          
                          onChange={(e) => {
                            console.log(e);
                          }}
                        /> */}
                      </td>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {arrayitems.map((item) => {
                return (
                  <tr className="h-10 border-2 border-slate-300 hover:bg-neutral-200">
                    {item.map((i) => {
                      return (
                        <td
                          scope="col"
                          className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap"
                        >
                          {i}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getLoginSession(req);
  const user = (session?._doc && (await findUser(session._doc))) ?? null;
  const displayDetails = new Array();
  await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/payment/${user._id}`)
    .then((res) => res.json())
    .then((res) => {
      displayDetails.push(res);
    });

  console.log("disp", displayDetails);
  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  if (!user.detailsAvailable) {
    return {
      redirect: {
        destination: "/auth/user/details",
        permanent: false,
      },
    };
  }
  if (user.category !== "college") {
    return {
      redirect: {
        destination: "/dashbaord/" + user.category,
        permanent: false,
      },
    };
  }
  if (!user.approved) {
    return {
      redirect: {
        destination: "/approvalpending",
        permanent: false,
      },
    };
  }
  return {
    props: {
      userDetails: JSON.stringify(user),
      displayDetails: displayDetails,
    },
  };
};

export default CSV_to_DB;


<div>
      {loading && <Loading />}
      <div className="mt-24 flex justify-center gap-10">
        <button
          className="bg-orange-600 flex gap-2 justify center text-white rounded-lg h-11 my-auto px-4 py-2  hover:bg-green-600"
          onClick={handleDownload}
        >
          <MdFileDownload size={30} /> <p className="mt-0.5">Sample Template</p>
        </button>
        <label className="w-64 flex flex-col items-center px-2 py-4 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border-orange-600 border-2 border-blue cursor-pointer hover:bg-neutral-200">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <MdFileUpload size={20} className="my-auto mr-3" />
            {/* <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" /> */}
          </svg>
          <span className="mt-2 text-sm leading-normal">Select a file</span>
          <input
            type="file"
            name="file"
            placeholder="Upload Only CSV"
            className="hidden"
            onChange={parseFile}
          />
        </label>

        <button
          className="bg-orange-600 flex gap-2 justify-center text-white rounded-lg w-48 h-11 my-auto px-4 py-2  hover:bg-green-600"
          onClick={handleSubmit}
        >
          <FiCheckCircle size={25} className="" />
          <div className="my-0.5">{btn}</div>
        </button>
      </div>
      {sorted && (
        <div className="overflow-auto mt-8">
          <table className="table-row overflow-scroll border border-collapse border-slate-400">
            <thead className="font-medium">
              <tr className="h-3 border-slate-300 hover:bg-neutral-100">
                {attributes.map((item) => {
                  return (
                    <>
                      <td
                        scope="col"
                        className="px-6 py-4 text-sm tracking-wider font-semibold border border-slate-500 bg-orange-500 whitespace-nowrap"
                      >
                        {item}
                        {/* <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 ml-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          
                          onChange={(e) => {
                          }}
                        /> */}
                      </td>
                    </>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {arrayitems.map((item) => {
                return (
                  <tr className="h-10 border-2 border-slate-300 hover:bg-neutral-200">
                    {item.map((i) => {
                      return (
                        <td
                          scope="col"
                          className="px-6 py-1 text-xs border border-slate-300  hover:bg-neutral-300 whitespace-nowrap"
                        >
                          {i}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
