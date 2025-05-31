"use client"
import React, { useState } from "react"
import { Informations } from "../../../../constants/data"
import SectionTitle from "../SectionTitle/SectionTitle"

const Faq = () => {
	const [activeItem, setActiveItem] = useState<number | null>(0)

	const handleChangeText = (index: number) => {
		setActiveItem(prev => (prev === index ? null : index))
	}

	return (
		<>
			<div className='px-9 pt-16 wrapper'>
				<SectionTitle>Informacje</SectionTitle>
				<div className='max-width lg:bg-[#FFF6DD] pb-10 flex flex-col md:rounded-t-[60px] rounded-b-[20px] mt-[33px] secondaryFont'>
					<div className='flex flex-col lg:flex-row lg:space-x-2 items-center justify-center gap-2 lg:gap-0 lg:justify-start'>
						{Informations.map((item, index) => (
							<div
								key={index}
								className='w-full lg:w-[20%] flex flex-col items-center'>
								<button
									onClick={() => handleChangeText(index)}
									className={`w-[90%] cursor-pointer lg:w-full h-[100px] px-4 py-3 text-sm md:text-lg font-semibold transition-colors duration-300
									${
										activeItem === index
											? "bg-[#FDBB4F] text-black pointer-events-none"
											: "bg-black text-white"
									}
									${index === 0 ? "lg:rounded-l-full" : ""}
									${index === Informations.length - 1 ? "lg:rounded-r-full" : ""}
                                    `}>
									{item.name}
								</button>

								{activeItem === index && (
									<div className='bg-[#FFF6DD] w-[90%] lg:hidden p-4 transition-all duration-500'>
										<p className='text-sm sm:text-base text-center md:text-lg leading-relaxed text-black'>
											{item.description}
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					<div className='hidden lg:block bg-[#FFF6DD] mt-4 rounded-[20px]'>
						{activeItem !== null && (
							<div className='rounded-[20px] px-12 pb-4 transition-all duration-500 text-sm sm:text-base md:text-lg text-center text-black'>
								<p className='text-sm lg:text-lg'>
									{Informations[activeItem].description}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default Faq
