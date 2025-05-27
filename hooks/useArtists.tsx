"use client"

import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { Artist } from "../interface/Artists"

export function useArtists() {
	const [artists, setArtists] = useState<Artist[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchArtists = async () => {
			setLoading(true)
			setError(null)
			const { data, error: sbError } = await supabase
				.from("artists")
				.select("*")
			if (sbError) {
				setError(sbError.message)
			} else {
				setArtists(data)
			}
			setLoading(false)
		}

		fetchArtists()
	}, [])

	return { artists, loading, error }
}
