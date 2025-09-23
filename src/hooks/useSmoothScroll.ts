import { type MouseEvent, useCallback } from 'react'

export const useSmoothScroll = () => {
	const scrollToSection = useCallback((sectionId: string, offset: number = 0) => {
		const targetElement = document.getElementById(sectionId)

		if (targetElement) {
			const elementPosition = targetElement.offsetTop
			const offsetPosition = elementPosition - offset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			})
		}
	}, [])

	const handleLinkClick = useCallback(
		(
			e: MouseEvent<HTMLAnchorElement>,
			sectionId: string,
			offset: number = 0,
			onClick?: () => void
		) => {
			e.preventDefault()

			if (onClick) {
				onClick()
			}

			scrollToSection(sectionId, offset)
		},
		[scrollToSection]
	)

	return {
		scrollToSection,
		handleLinkClick
	}
}
