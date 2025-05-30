"use client"
import ArtistsComp from "./components/ArtistsComp/ArtistsComp"
import Description from "./components/Description/Description"
import Faq from "./components/Faq/Faq"
import Map from "./components/Map/Map"
import News from "./components/News/News"
import Title from "./components/Title/Title"

export default function Home() {
	return (
		<>
			<main className='bg-gradient-to-b from-yellow-50 to-white'>
				<div className='h-20' />
				<Title />
				<Map />
				<Description />
				<ArtistsComp />
				<Faq />
				<News />
			</main>
		</>
	)
}
