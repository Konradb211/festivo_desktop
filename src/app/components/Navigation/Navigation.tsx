"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navLinks } from "../../../../constants/navigation"

const Navigation = () => {
	const pathname = usePathname()

	return (
		<nav className='fixed w-full flex justify-center mt-5 z-50'>
			<div className='flex justify-center bg-black w-1/2 rounded-full text-white shadow-lg'>
				<ul className='flex flex-row gap-4 py-2 uppercase'>
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
		</nav>
	)
}

export default Navigation
