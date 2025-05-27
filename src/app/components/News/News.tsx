import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle"
import Image from "next/image"
import Link from "next/link"
import { useNews } from "../../../../hooks/useNews"

const News = () => {
	const { news, loading } = useNews()
	const sliceNews = news.slice(0, 3)
	return (
		<div className='wrapper'>
			<SectionTitle>Najnowsze newsy</SectionTitle>
			<div className='flex justify-center px-5'>
				{loading ? (
					<p>Ładowanie danych...</p>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
						{sliceNews.map(post => (
							<a
								href={`/news/${post.id}`}
								key={post.id}
								className='group flex flex-col items-center bg-[#f3f3f3] w-full max-w-[400px] h-full'>
								<div className='flex flex-col flex-grow w-full'>
									<div className='overflow-hidden'>
										<Image
											src={post.image}
											width={400}
											height={400}
											alt={post.title}
											className='w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110'
										/>
									</div>
									<p className='text-center text-xl font-bold px-5 py-5'>
										{post.title}
									</p>
									<p className='text-justify px-5 py-5 flex-grow'>
										{post.description}
									</p>
									<div className='px-5 py-5'>
										<p className='transition-colors duration-300 group-hover:font-bold'>
											czytaj więcej
										</p>
									</div>
								</div>
							</a>
						))}
					</div>
				)}
			</div>
			<div className='flex justify-center pt-14'>
				<Link
					className='bg-[#f8b24b] py-2.5 px-4 font-bold uppercase rounded hover:bg-[#f8b24b]'
					href='/news'>
					Zobacz więcej
				</Link>
			</div>
		</div>
	)
}

export default News
