"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useArtists } from "../../../../hooks/useArtists"

export default function ArtistsPage() {
	const params = useParams()
	const id = Number(params?.id)

	const { artists, loading, error } = useArtists()

	if (loading) return <p className='text-center py-10'>Ładowanie…</p>
	if (error) return <p className='text-center py-10 text-red-500'>{error}</p>

	const artist = artists.find(a => a.id === id)
	if (!artist) {
		return <p className='text-center py-10'>Nie znaleziono artysty o ID {id}</p>
	}

	return (
		<div className='bg-gradient-to-b from-yellow-50 to-white'>
			<div className='wrapper py-10'>
				<div className='h-20' />
				<div className='flex justify-center mb-10'>
					<div className='w-full max-w-6xl px-4'>
						{artist.img ? (
							<div className='relative w-full aspect-[16/6] rounded-xl overflow-hidden shadow-lg'>
								<Image
									src={artist.img}
									alt={artist.name}
									fill
									className='object-cover'
									priority
								/>
							</div>
						) : (
							<div className='w-full aspect-[16/6] rounded-xl bg-gray-200 flex items-center justify-center'>
								<span className='text-gray-500'>Brak grafiki</span>
							</div>
						)}
					</div>
				</div>

				<div className='flex flex-col sm:flex-row justify-center gap-10 wrapper-1000 px-5'>
					<div className='flex flex-col items-center sm:items-start gap-4'>
						<h1 className='text-5xl uppercase font-bold'>{artist.name}</h1>
						<div className='flex w-full gap-10 justify-center sm:justify-between'>
							<p className='text-2xl text-[#f8b24b]'>{artist.day}</p>
							<p className='text-2xl text-[#f8b24b]'>{artist.Stage}</p>
						</div>

						<div className='flex items-center w-full gap-6 mt-4'>
							{artist.Spotify && (
								<Link
									href={artist.Spotify}
									target='_blank'
									className='flex flex-col items-center transition-transform duration-300 hover:scale-110'>
									<Image
										src='/logos/spotify.png'
										alt='Spotify logo'
										width={30}
										height={30}
									/>
									<span className='mt-2 text-sm font-bold text-[#1DB954]'>
										Spotify
									</span>
								</Link>
							)}
							{artist.Youtube && (
								<Link
									href={artist.Youtube}
									target='_blank'
									className='flex flex-col items-center transition-transform duration-300 hover:scale-110'>
									<Image
										src='/logos/yt.png'
										alt='YouTube logo'
										width={35}
										height={35}
									/>
									<span className='mt-2 text-sm font-bold text-[#FF0000]'>
										YouTube
									</span>
								</Link>
							)}
						</div>
					</div>

					<div className='flex flex-col items-center sm:items-start gap-6'>
						<p className='max-w-prose text-center sm:text-left'>
							{artist.description}
						</p>
						<p className='font-medium'>
							Liczba miesięcznych słuchaczy:{" "}
							<span className='font-bold'>{artist.listeners ?? "—"}</span>
						</p>
						{artist.Youtube && (
							<div className='w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg'>
								<iframe
									className='w-full h-full'
									src={`https://www.youtube.com/embed/${artist.link}`}
									title='YouTube video'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
