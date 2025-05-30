"use client"
import Image from "next/image"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Title from "../components/Title/Title"
import { useNews } from "../../../hooks/useNews"

const Page = () => {
	const { news, loading } = useNews()

	return (
		<div className='bg-gradient-to-b from-yellow-50 to-white'>
			<div className='wrapper'>
				<div className='h-20' />
				<Title />
				<SectionTitle>News</SectionTitle>
				<div className='flex justify-center px-5'>
					{loading ? (
						<p>Ładowanie danych...</p>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
							{news.map(post => (
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
												className='w-full aspect-[6/6] h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110'
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
			</div>
		</div>
	)
}

export default Page
