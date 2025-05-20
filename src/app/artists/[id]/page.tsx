import { notFound } from "next/navigation"
import { ARTISTS } from "../../../../constants/artists"
import Image from "next/image"
import Link from "next/link"

interface ArtistPageProps {
	params: {
		id: string
	}
}

const ArtistsPage = ({ params }: ArtistPageProps) => {
	const artists = ARTISTS.find(a => a.id === Number(params.id))

	if (!artists) return notFound

	return (
		<div className='wrapper'>
			<div className='h-20' />
			<div className='flex justify-center py-8'>
				<div className='w-full max-w-6xl px-4'>
					<div className='relative w-full aspect-[16/6] rounded-xl overflow-hidden shadow-lg'>
						<Image
							src={artists.img}
							alt={artists.name}
							fill
							className='object-cover bg-center'
							priority
						/>
					</div>
				</div>
			</div>
			<div className='flex sm:flex-row flex-col justify-center gap-10 sm:items-start items-center wrapper-1000 px-5'>
				<div className='flex flex-col items-center px-4 gap-4'>
					<h3 className='text-5xl uppercase font-bold'>{artists.name}</h3>
					<p className='text-[#f8b24b] text-2xl pb-4'>{artists.day}</p>
					<div className='flex gap-5 items-center justify-center'>
						<Link
							href={artists.spotify}
							target='_blank'
							className='flex flex-col items-center transform transition-transform duration-300 hover:scale-110'>
							<Image
								src='/logos/spotify.png'
								alt='spotify logo'
								width={30}
								height={30}
							/>
							<span className=' font-bold mt-2 text-sm text-[#1DB954]'>
								Spotify
							</span>
						</Link>

						<Link
							href={artists.youtube}
							target='_blank'
							className='flex flex-col items-center transform transition-transform duration-300 hover:scale-110'>
							<Image
								src='/logos/yt.png'
								alt='youtube logo'
								width={35}
								height={35}
							/>
							<span className='font-bold mt-2 text-sm text-[#FF0000]'>
								YouTube
							</span>
						</Link>
					</div>
				</div>
				<div className=''>
					<p className='text-center sm:text-start pb-4'>
						{artists.description}
					</p>
					<p className=' text-center sm:text-start'>
						Liczba miesięcznych słuchaczy:
					</p>
					<p className='text-center sm:text-start pb-4'>{artists.listeners}</p>
					<div className='aspect-video w-full max-w-xl mx-auto my-4'>
						<iframe
							className='w-full h-full rounded-xl shadow-lg'
							src={`https://www.youtube.com/embed/${artists.link}`}
							title='YouTube video'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArtistsPage
