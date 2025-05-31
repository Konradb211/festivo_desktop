import Image from "next/image"

export default function Map() {
	return (
		<div className='wrapper'>
			<Image
				src='/baner.png'
				alt='baner'
				width={1300}
				height={600}
				className='h-[500px] object-cover'
			/>
		</div>
	)
}
