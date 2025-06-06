"use client"
import { useState } from "react"
import Title from "../components/Title/Title"
import Image from "next/image"
import Link from "next/link"
import { days } from "../../../constants/data"
import { useArtists } from "../../../hooks/useArtists"
import SectionTitle from "../components/SectionTitle/SectionTitle"

const Page = () => {
	const { artists, loading } = useArtists()
	const [selectedDay, setSelectedDay] = useState("Wszyscy")

	const filteredArtists =
		selectedDay === "Wszyscy"
			? artists
			: artists.filter(artist => artist.day === selectedDay)

	return (
		<div className='bg-gradient-to-b from-yellow-50 to-white'>
			<div className='wrapper pb-10'>
				<div className='h-20' />
				<Title />
				<Image
					src='/lineup-baner.png'
					alt='baner'
					width={1300}
					height={600}
					className='h-[500px] object-cover pb-10'
				/>
				<SectionTitle>Line Up</SectionTitle>
				<div className='flex flex-wrap justify-center gap-4 pb-8 pt-10'>
					{days.map(day => (
						<button
							key={day}
							onClick={() => setSelectedDay(day)}
							className={`px-4 py-2 rounded-full border transition-colors duration-300 cursor-pointer ${
								selectedDay === day
									? "bg-[#f8b24b] text-white border-[#f8b24b]"
									: "bg-white text-black border-gray-300 hover:border-[#f8b24b] hover:text-white hover:bg-[#f8b24b]"
							}`}>
							{day}
						</button>
					))}
				</div>
				{loading ? (
					<p>Ładowanie danych...</p>
				) : (
					<div className='flex flex-wrap justify-center gap-6'>
						{filteredArtists.map(artist => (
							<Link
								className='artist-calc-width'
								href={`/artists/${artist.id}`}
								key={artist.id}>
								<div className='h-auto flex flex-col items-center group'>
									<div className='w-64 h-64 relative'>
										<Image
											src={artist.img}
											alt={artist.name}
											fill
											className='object-cover rounded-full transition-transform duration-300 group-hover:scale-110'
										/>
										<p className='absolute inset-0 flex items-center justify-center text-[#f8b24b] text-sm font-bold text-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-300 transition-transform capitalize'>
											{artist.name}
										</p>
									</div>
									<h3 className='mt-3 text-center font-medium capitalize'>
										{artist.name}
									</h3>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Page
