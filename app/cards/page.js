'use client'

import React, { useEffect } from 'react'
import CardView from '../CardView'
import GenerateCard from '../GenerateCard'

const page = () => {
    // get from local storage
    const [data, setData] = React.useState([])
    const [benefits, setBenefits]= React.useState([])
    const insuarance = [
        {"name": "Insurance Company 1"},
        {"name": "Insurance Company 2"}
    ]
    useEffect(() => { 

        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('data')
            const parsedData = JSON.parse(data)
            setBenefits(parsedData.benefits)
        }
        console.log("no window")
    }, [])

    
    return (
        
        <div className="main">
            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <h2 className="text-xl font-bold">Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                        <span>Make a Visit</span>
                                    </a>
                                </li>


                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-12">
                    <div className='ml-3 text-3xl font-semibold'>Benefits</div>
                    
                    {insuarance.map((item, index) => { 

                        <p key={index} className='ml-3 text-3xl font-semibold text-gray-500'>{item.name}</p>

                    })}
                    <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 m-5">
                        {benefits?.map((item, index) => { 
                            return (
                                <GenerateCard key={index} benefitName={item.benefitName} isAvailable={item.status} type={item.benefitType} availableBalance={item.availableBalance} benefitLimit={item.benefitLimit} visitLimit={item.visitLimit} reservedAmount={item.reservedAmount} copayAmount={item.copayValue} copayType={item.copayType} copayAppliesTo="Consultation" />
                            )
                        })}
                        {/* {generateCard('Benefit 1', true, 'Type A', 1200, 1200, 1200, 1200)}
                        {generateCard('Benefit 2', false, 'Type B', 1500, 2000, 1000, 500, 500, 'Flat', 'Consultation')} */}


                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default page