// app/login/page.tsx
"use client"

import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../../lib/supabaseClient"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"

interface LoginFormInputs {
	email: string
	password: string
}

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>()
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const router = useRouter()

	const onSubmit = async (data: LoginFormInputs) => {
		setLoading(true)
		setErrorMessage("")

		const { error } = await supabase.auth.signInWithPassword({
			email: data.email,
			password: data.password,
		})

		if (error) {
			setErrorMessage(error.message)
			setLoading(false)
			return
		}

		router.push("/profile")
	}
	useEffect(() => {
		const checkSession = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser()

			if (user) {
				router.push("/profile")
			}
		}

		checkSession()
	}, [router])

	return (
		<div className='bg-gradient-to-b from-yellow-50 to-white'>
			<div className='wrapper'>
				<div className='h-20' />
				<Title />
				<SectionTitle>Logowanie</SectionTitle>

				<div className='flex flex-col items-center mt-16'>
					<div className='w-full max-w-md p-8 bg-white border rounded-xl shadow'>
						<h2 className='text-xl font-semibold mb-4'>Zaloguj się</h2>

						<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
							<div>
								<input
									type='email'
									placeholder='Email'
									className='w-full p-3 border rounded'
									{...register("email", {
										required: "Email jest wymagany",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Nieprawidłowy format email",
										},
									})}
								/>
								{errors.email && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.email.message}
									</p>
								)}
							</div>

							<div>
								<input
									type='password'
									placeholder='Hasło'
									className='w-full p-3 border rounded'
									{...register("password", {
										required: "Hasło jest wymagane",
										minLength: {
											value: 6,
											message: "Hasło musi mieć min. 6 znaków",
										},
									})}
								/>
								{errors.password && (
									<p className='text-red-500 text-sm mt-1'>
										{errors.password.message}
									</p>
								)}
							</div>

							{errorMessage && (
								<p className='text-red-500 text-sm text-center'>
									{errorMessage}
								</p>
							)}

							<button
								type='submit'
								disabled={loading}
								className='w-full bg-black text-white py-3 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer'>
								{loading ? "Logowanie..." : "Zaloguj się"}
							</button>
						</form>

						<p className='text-sm mt-4 text-center'>
							Nie masz konta?{" "}
							<a href='/register' className='text-yellow-600 hover:underline'>
								Zarejestruj się
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
