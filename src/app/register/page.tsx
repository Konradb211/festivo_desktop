"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "../../../lib/supabaseClient"
import Title from "../components/Title/Title"
import SectionTitle from "../components/SectionTitle/SectionTitle"

interface RegisterFormInputs {
	name: string
	email: string
	password: string
	confirmPassword: string
}

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterFormInputs>()

	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const router = useRouter()
	const password = watch("password")

	const onSubmit = async (data: RegisterFormInputs) => {
		const { name, email, password } = data
		setLoading(true)
		setErrorMessage("")

		const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
			{
				email,
				password,
				options: {
					data: {
						full_name: name,
					},
				},
			}
		)

		if (signUpError) {
			console.error("signUpError", signUpError)
			setErrorMessage(signUpError.message)
			setLoading(false)
			return
		}
		setLoading(false)
		router.push("/login")
	}

	return (
		<div className='wrapper'>
			<div className='h-20' />
			<Title />
			<SectionTitle>Rejestracja</SectionTitle>

			<div className='flex flex-col items-center mt-16'>
				<div className='w-full max-w-md p-8 bg-white border rounded-xl shadow'>
					<h2 className='text-xl font-semibold mb-4'>Załóż konto</h2>

					<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
						<div>
							<input
								type='text'
								placeholder='Imię'
								className='w-full p-3 border rounded'
								{...register("name", {
									required: "Imię jest wymagane",
									minLength: { value: 2, message: "Min. 2 znaki" },
								})}
							/>
							{errors.name && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.name.message}
								</p>
							)}
						</div>

						<div>
							<input
								type='email'
								placeholder='Email'
								className='w-full p-3 border rounded'
								{...register("email", {
									required: "Email jest wymagany",
									pattern: {
										value: /^\S+@\S+$/i,
										message: "Nieprawidłowy format",
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
									minLength: { value: 6, message: "Min. 6 znaków" },
								})}
							/>
							{errors.password && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.password.message}
								</p>
							)}
						</div>

						<div>
							<input
								type='password'
								placeholder='Potwierdź hasło'
								className='w-full p-3 border rounded'
								{...register("confirmPassword", {
									required: "Potwierdź hasło",
									validate: val =>
										val === password || "Hasła nie są takie same",
								})}
							/>
							{errors.confirmPassword && (
								<p className='text-red-500 text-sm mt-1'>
									{errors.confirmPassword.message}
								</p>
							)}
						</div>

						{errorMessage && (
							<p className='text-red-500 text-sm text-center'>{errorMessage}</p>
						)}

						<button
							type='submit'
							disabled={loading}
							className='w-full bg-black text-white py-3 rounded hover:bg-yellow-500 hover:text-black transition-colors'>
							{loading ? "Tworzenie konta..." : "Zarejestruj się"}
						</button>
					</form>

					<p className='text-sm mt-4 text-center'>
						Masz już konto?{" "}
						<a href='/login' className='text-yellow-600 hover:underline'>
							Zaloguj się
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
