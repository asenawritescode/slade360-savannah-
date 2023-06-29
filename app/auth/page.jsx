"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
      const router= useRouter();

  const [memberNumber, setMemberNumber] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [data, setData] = useState(null);

  const [token, setToken] = useState(null);

  const BASEURL = "https://accounts.multitenant.slade360.co.ke/";
  async function makeRequest(endpoint, type, payload, headers) {
    // switch between the type of request

    await fetch(BASEURL + endpoint, {
      method: type,
      body: payload,
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((r) => setToken(r.access_token))
      .catch((error) => {
        console.log(error);
      });
  }

  const string =
    "grant_type=password&client_id=XdIjJgLQBOt8GCAti5GE9413y5BsR2V2IzybSj5q&client_secret=kC0N0LHwYjvv60QmsWMiPv7J7ZZoSHsb7cdLf9pgsmxInGXcBWj3Gw6KKAU9GRqO6JKpiO4y9pSwybo9SSH3chdq31jYU4V0NEhDIztGfiYgeSOG2NJorWl2ENDG0y8f&username=angelmuttai@gmail.com&password=A1997Gaa!";

  useEffect(() => {
    makeRequest("oauth2/token/", "POST", string, {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    });
  }, []);

  const url = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/?member_number=${memberNumber}&payer_slade_code=${insuranceCompany}`;

  const headers = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const payload = {};
  const getUser = async () => {
    console.log(memberNumber, insuranceCompany);
    memberNumber && insuranceCompany
      ? fetch(url, { method: "GET", headers })
          .then((response) => {
            return response.json();
          })
            .then((data) => {
                setData(data); 
                // store to local storage
                localStorage.setItem("data", JSON.stringify(data));
                  router.push("/cards");

                
            })
          .catch((error) => {
            console.log(error);
          })
      : alert("Fill in the data");
  };
  const handleMemberNoChange = (e) => {
    setMemberNumber(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setInsuranceCompany(e.target.value);
  };
  return (
    <section>
      <div class="container h-full px-6 py-24">
        <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <Image
              src="/auth.svg"
              class="w-full"
              width={500}
              height={500}
              alt="Phone image"
            />
          </div>

          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <section class="bg-gray-50 dark:bg-gray-900">
              <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                  href="#"
                  class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                  <img
                    class="w-8 h-8 mr-2"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                    alt="logo"
                  />
                  Tambuzi Health Care
                </a>
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Kindly Sign In
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        for="member_number"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Member Number
                      </label>
                      <input
                        required
                        type="text"
                        name="member_number"
                        onChange={handleMemberNoChange}
                        id="member_number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="23UUAHD62"
                        
                      />
                    </div>
                    <div className="relative w-full lg:max-w-sm">
                      <select
                        className="w-full p-2.5  border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 py-2 text-sm text-gray-700 dark:text-black"
                        onChange={handleCompanyChange}
                      >
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="457"
                        >
                          Jubilee Health Insurance Limited{" "}
                        </option>
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="2001"
                        >
                          APA Insurance Company{" "}
                        </option>
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="2011"
                        >
                          Madison General Insurance Kenya{" "}
                        </option>
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="2002"
                        >
                          Britam General Insurance{" "}
                        </option>
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="2020"
                        >
                          Minet Insurance Brokers Limited{" "}
                        </option>
                        <option
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          value="2023"
                        >
                          Savannah Informatics Insurance Scheme{" "}
                        </option>
                        <option class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          GNRSH Insurance Scheme{" "}
                        </option>
                      </select>
                    </div>

                    <button
                      
                      class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={(e) => {
                        e.preventDefault();
                        getUser();
                      }}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
