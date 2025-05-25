"use client"
import ArtistsComp from "./components/ArtistsComp/ArtistsComp"
import Faq from "./components/Faq/Faq"
import Map from "./components/Map/Map"
import Title from "./components/Title/Title"

export default function Home() {
	return (
		<>
			<main>
				<div className='h-20' />
				<Title />
				<Map />
				<ArtistsComp />
				<Faq />
			</main>
		</>
	)
}
