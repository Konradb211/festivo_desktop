"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../../../../constants/navigation"
import { useState } from "react"
import Image from "next/image"

const Navigation = () => {
	
	const [navigationShow, setNavigationShow] = useState(false)

	const pathname = usePathname()

	const handleNavigationShow = () => {
		setNavigationShow(!navigationShow)
	}

	return (
		<nav className='fixed w-full flex justify-center z-50'>
			{/* desktop */}
			<div className='nav-desktop mt-5 flex justify-center bg-black w-1/2 rounded-full text-white shadow-lg'>
				<ul className='flex flex-row gap-4 py-4 uppercase'>
					{navLinks.map(({ href, label }) => {
						const isActive = pathname === href

						return (
							<li key={href}>
								<Link
									href={href}
									className={`px-3 py-1 rounded-full transition-colors duration-200 ${
										isActive
											? "text-[#f8b24b] font-bold"
											: "hover:text-[#f8b24b]"
									}`}>
									{href === "/" ? (
										<>
											fest<span className='text-[#f8b24b]'>ivo</span>
										</>
									) : (
										label
									)}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			{/* mobile */}
			<div className='nav-mobile flex flex-col justify-center bg-black w-full text-white shadow-lg'>
				<div className="flex flex-row items-center justify-between w-full py-5 px-10">
					<p>logo</p>
					<button className="cursor-pointer" onClick={handleNavigationShow}>
  						<Image width={30} height={30} src={`${!navigationShow ? '/icons/menu.svg' : '/icons/close.svg'}`} alt="menu" />
					</button>
				</div>
				{navigationShow && <div className="w-full">
					<ul className='flex-co gap-5 pt-2 pb-4 px-6 uppercase w-full'>
						{navLinks.map(({ href, label }) => {
							const isActive = pathname === href
							return (
								<li className="py-2" key={href}>
									<Link
										href={href}
										className={`px-3 py-1 rounded-full transition-colors duration-200 ${
											isActive
												? "text-[#f8b24b] font-bold"
												: "hover:text-[#f8b24b]"
										}`}>
										{href === "/" ? (
											<>
												fest<span className='text-[#f8b24b]'>ivo</span>
											</>
										) : (
											label
										)}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>}
			</div>
		</nav>
	)
}

export default Navigation
