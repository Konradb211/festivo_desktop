// app/profile/page.tsx
"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"

export default function ProfilePage() {
	const [username, setUsername] = useState<string | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")

	useEffect(() => {
		const fetchProfile = async () => {
			const {
				data: { user },
				error: sessionError,
			} = await supabase.auth.getUser()

			if (sessionError || !user) {
				setError("Nie jesteś zalogowany")
				setLoading(false)
				return
			}

			// tu zmieniamy .single() na .maybeSingle()
			const { data, error: profileError } = await supabase
				.from("profilestest")
				.select("username")
				.eq("id", user.id)
				.maybeSingle()

			if (profileError) {
				setError("Błąd pobierania profilu: " + profileError.message)
			} else if (!data) {
				setError("Nie znaleziono profilu — spróbuj ponownie później")
			} else {
				setUsername(data.username)
			}

			setLoading(false)
		}

		fetchProfile()
	}, [])

	return (
		<div className='wrapper'>
			<div className='h-20' />
			<Title />
			<SectionTitle>Twój profil</SectionTitle>

			<div className='flex flex-col items-center mt-16'>
				<div className='w-full max-w-md p-8 bg-white border rounded-xl shadow text-center'>
					{loading && <p>Ładowanie…</p>}
					{error && <p className='text-red-500'>{error}</p>}
					{!loading && !error && username && (
						<>
							<h2 className='text-2xl font-semibold mb-4'>
								Witaj, {username}!
							</h2>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
