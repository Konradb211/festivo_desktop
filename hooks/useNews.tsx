"use client"

import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { NewsItem } from "../interface/NewItems"

export function useNews() {
	const [news, setNews] = useState<NewsItem[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchNews = async () => {
			setLoading(true)
			setError(null)
			const { data, error: sbError } = await supabase.from("news").select("*")
			if (sbError) {
				setError(sbError.message)
			} else {
				setNews(data)
			}
			setLoading(false)
		}

		fetchNews()
	}, [])

	return { news, loading, error }
}
