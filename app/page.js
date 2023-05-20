'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();
  const navigateToAnotherPage = () => {
    router.push('/auth'); // Replace '/another-page' with the actual path of the page you want to navigate to
  };
  return (
    //  validate


    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-20 lg:w-100">
      <div className="mt-10 relative">
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <h1 className="text-9xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-7xl text-white">
              <span className="block xl:inline text-black">
                Tambuzi
              </span>

              <span className="block text-emerald-400 xl:inline">
                HealthCare
              </span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-gray-300">
              Convenience and Accessibility

              24/7 Access: We understand that you may need access to your stored items at any time. That's why we offer 24/7 access to our storage units, allowing you to retrieve or add items whenever it's convenient for you.

              Online Account Management: Our user-friendly online platform enables you to manage your storage unit, make payments, and update your account information with ease. With just a few clicks, you can conveniently handle all aspects of your storage needs.

              Professional Assistance: Our friendly and knowledgeable staff is always ready to assist you. Whether you have questions, need help choosing the right storage unit size, or require any other support, we are here to provide personalized assistance and ensure a smooth storage experience.
            </p>



          </div>
          <div className="relative">
            <div className="lg:shrink-0 lg:relative">
              <div className="lg:relative md:relative lg:w-[170%]">
                <img
                  className="w-1/2 md:relative lg:absolute"
                  style={{ display: "block" }}
                  src="/auth.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={navigateToAnotherPage} class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </main>

  )
}