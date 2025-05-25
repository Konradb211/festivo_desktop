import Image from "next/image"
import { news } from "../../../constants/news"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Title from "../components/Title/Title"

const page = () => {
	return (
		<div className='wrapper'>
			<div className='h-20' />
			<Title />
			<SectionTitle>News</SectionTitle>
			<div className='flex justify-center px-5'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{news.map(post => (
						<a
							href={`/news/${post.id}`}
							key={post.id}
							className='flex flex-col justify-start items-center'>
							<div className='w-full max-w-[400px]'>
								<Image
									src={post.image}
									width={400}
									height={400}
									alt={post.title}
									className='w-full h-auto'
								/>
								<p className='text-justify w-full max-w-[400px] mt-2'>
									{post.description}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default page
