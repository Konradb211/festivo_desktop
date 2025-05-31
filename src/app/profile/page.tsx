"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "../../../lib/supabaseClient"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfilePage() {
	const [username, setUsername] = useState<string | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const router = useRouter()

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

	const handleLogout = async () => {
		await supabase.auth.signOut()
		router.push("/login")
	}
	return (
		<div className='min-h-screen bg-gradient-to-b from-yellow-50 to-white'>
			<div className='h-20' />
			<div className='wrapper pb-10'>
				<Title />
				<SectionTitle>Twój profil</SectionTitle>
				<div className='flex justify-center gap-5 items-center'>
					<div className='flex flex-col items-center mt-16 px-4'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='w-full max-w-md p-8 bg-white border rounded-2xl shadow-lg text-center space-y-4'>
							{loading && <p className='text-gray-500'>Ładowanie…</p>}
							{error && <p className='text-red-500'>{error}</p>}
							{!loading && !error && username && (
								<>
									<img
										src={`https://api.dicebear.com/7.x/initials/svg?seed=${username}`}
										alt='Avatar'
										className='w-24 h-24 mx-auto rounded-full border shadow'
									/>
									<h2 className='text-2xl font-bold'>Witaj, {username}!</h2>
									<p className='text-gray-500'>Uczestnik FESTIVO 2025</p>
									<button
										onClick={handleLogout}
										className='w-full bg-black text-white py-3 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer'>
										Wyloguj się
									</button>
								</>
							)}
						</motion.div>
					</div>
				</div>
				<h1 className='font-bold text-5xl text-center pt-10 pb-10'>
					Jak bezpiecznie spędzać czas na Festiwalu?
				</h1>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-10 pt-10 px-5'>
					<Image
						className='w-1/2'
						src='/Oznacz_nas.png'
						width={400}
						height={400}
						alt='Oznacz Nas!'
					/>
					<Image
						className='w-1/2'
						src='/Bezpieczna_zabawa.png'
						height={400}
						width={400}
						alt='Bezpieczna zabawa'
					/>
				</div>
			</div>
		</div>
	)
}
