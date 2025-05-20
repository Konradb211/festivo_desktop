"use client"
import Link from "next/link"
import { ARTISTS } from "../../../../constants/artists"
import SectionTitle from "../SectionTitle/SectionTitle"
import Image from "next/image"
import { useEffect, useState } from "react"

const ArtistsComp = () => {
	const [randomArtists, setRandomArtists] = useState<typeof ARTISTS>([])

	useEffect(() => {
		const shuffled = [...ARTISTS].sort(() => 0.5 - Math.random())
		setRandomArtists(shuffled.slice(0, 8))
	}, [])

	return (
		<div className='wrapper'>
			<SectionTitle>Artyści</SectionTitle>
			<div className='flex flex-wrap justify-center gap-6'>
				{randomArtists.map(artist => (
					<Link href={`/artists/${artist.id}`} key={artist.id}>
						<div className='h-auto flex flex-col items-center group'>
							<div className='w-64 h-64 relative'>
								<Image
									src={artist.img}
									alt={artist.name}
									fill
									className='object-cover rounded-full transition-transform duration-300 group-hover:scale-110'
								/>
								<p className='absolute inset-0 flex items-center justify-center text-[#f8b24b] text-sm font-bold text-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 duration-300 transition-transform'>
									{artist.name}
								</p>
							</div>
							<h3 className='mt-3 text-center font-medium'>{artist.name}</h3>
						</div>
					</Link>
				))}
			</div>
			<div className='flex justify-center my-10'>
				<Link
					className='bg-[#f8b24b] py-2.5 px-4 font-bold uppercase rounded'
					href='/'>
					Zobacz więcej
				</Link>
			</div>
		</div>
	)
}

export default ArtistsComp
