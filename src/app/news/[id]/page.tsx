import React from "react"
import { news } from "../../../../constants/news"
import { notFound } from "next/navigation"
import Image from "next/image"
import SectionTitle from "@/app/components/SectionTitle/SectionTitle"

interface NewsPageProps {
	params: {
		id: string
	}
}

const News = ({ params }: NewsPageProps) => {
	const post = news.find(a => a.id === Number(params.id))

	if (!post) return notFound

	return (
		<div className='wrapper'>
			<div className='h-20' />
			<div className='flex justify-center py-8'>
				<div className='w-full max-w-6xl px-4'>
					<div className='relative w-full aspect-[16/6] rounded-xl overflow-hidden shadow-lg'>
						<Image
							src={post.image}
							alt={post.title}
							fill
							className='object-cover bg-center'
							priority
						/>
					</div>
					<div>
						<SectionTitle>{post.title}</SectionTitle>
					</div>
					<div>
						<p>{post.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default News
