import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"
import Navigation from "./components/Navigation/Navigation"

export const metadata: Metadata = {
	title: "Festivo",
	description: "Festivo",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body cz-shortcut-listen='true'>
				<Navigation />
				{children}
			</body>
		</html>
	)
}
