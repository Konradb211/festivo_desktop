import { ReactNode } from "react"

interface SectionTitleProps {
	children: ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
	return <h2 className='text-center text-4xl py-10 font-bold'>{children}</h2>
}

export default SectionTitle
