"use client";

import axios from "axios"
import { useEffect, useState } from "react";
import Image from "next/image";

const page = () => {
    const [memberNumber, setMemberNumber] = useState("DEMO/001");
    const [insuranceCompany, setInsuranceCompany] = useState(457);

    const url =
      "https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/";


    const headers = {
      Accept: "*/*",
      Authorization: "Login to authorize",
      "Content-Type": "application/json",
    };
    const getUser =  async() => {
        try {
            const response = await axios.post(
                url,
                {
                    memberNumber,
                    insuranceCompany,
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }



 
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
                        type="text"
                        name="member_number"
                        id="member_number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="23UUAHD62"
                        required
                      />
                    </div>
                    <div className="relative w-full lg:max-w-sm">
                      <select
                        className="w-full p-2.5 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 py-2 text-sm text-gray-700 dark:text-gray-200"
                        onChange={(e) => console.log(e.target.value)}
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
                        <option class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" value="2023">
                          Savannah Informatics Insurance Scheme{" "}
                        </option>
                        <option class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          GNRSH Insurance Scheme{" "}
                        </option>
                       
                      </select>
                    </div>

                    <button
                      type="submit"
                                          class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={getUser}
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
