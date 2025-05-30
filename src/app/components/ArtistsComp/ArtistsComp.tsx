"use client"
import Link from "next/link"
import SectionTitle from "../SectionTitle/SectionTitle"
import Image from "next/image"
import { useArtists } from "../../../../hooks/useArtists"

const ArtistsComp = () => {
	const { artists, loading } = useArtists()

	const artistsToShow = artists.sort(() => Math.random() - 0.5).slice(0, 8)

	return (
		<div className='wrapper'>
			<SectionTitle>Artyści</SectionTitle>
			{loading ? (
				<p>Ładowanie danych...</p>
			) : (
				<div className='flex flex-wrap justify-center gap-6'>
					{artistsToShow.map(artist => (
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
			)}
			<div className='flex justify-center pt-14'>
				<Link
					className='bg-[#f8b24b] py-2.5 px-4 font-bold uppercase rounded hover:bg-[#f8b24b]'
					href='/lineup'>
					Zobacz więcej
				</Link>
			</div>
		</div>
	)
}

export default ArtistsComp
