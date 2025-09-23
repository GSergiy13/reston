import { useEffect, useState } from 'react'

export const useActiveSection = (sectionIds: string[], offset: number = 100) => {
	const [activeSection, setActiveSection] = useState<string>('')

	const throttle = <T extends (...args: any[]) => any>(
		func: T,
		limit: number
	): ((...args: Parameters<T>) => void) => {
		let inThrottle: boolean
		let lastFunc: ReturnType<typeof setTimeout>
		let lastRan: number

		return function (...args: Parameters<T>): void {
			if (!lastRan) {
				func.apply(args)
				lastRan = Date.now()
			} else {
				clearTimeout(lastFunc)
				lastFunc = setTimeout(
					() => {
						if (Date.now() - lastRan >= limit) {
							func.apply(args)
							lastRan = Date.now()
						}
					},
					limit - (Date.now() - lastRan)
				)
			}
		}
	}

	useEffect(() => {
		let activeSectionSet = false

		const observerOptions = {
			root: null,
			rootMargin: `-${offset}px 0px -70% 0px`,
			threshold: 0
		}

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			let foundActive = false

			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id)
					foundActive = true
					activeSectionSet = true
				}
			})

			if (!foundActive && activeSectionSet) {
				setActiveSection('')
			}
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)

		sectionIds.forEach(sectionId => {
			const section = document.getElementById(sectionId)
			if (section) {
				observer.observe(section)
			}
		})

		return () => {
			sectionIds.forEach(sectionId => {
				const section = document.getElementById(sectionId)
				if (section) {
					observer.unobserve(section)
				}
			})
		}
	}, [sectionIds, offset])

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + offset
			let foundActive = false

			for (const sectionId of sectionIds) {
				const section = document.getElementById(sectionId)

				if (section) {
					const sectionTop = section.offsetTop
					const sectionHeight = section.offsetHeight
					const sectionBottom = sectionTop + sectionHeight

					if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
						setActiveSection(sectionId)
						foundActive = true
						break
					}
				}
			}

			if (!foundActive) {
				setActiveSection('')
			}
		}

		const throttledScroll = throttle(handleScroll, 150)
		window.addEventListener('scroll', throttledScroll)
		window.addEventListener('resize', throttledScroll)

		handleScroll()

		return () => {
			window.removeEventListener('scroll', throttledScroll)
			window.removeEventListener('resize', throttledScroll)
		}
	}, [sectionIds, offset])

	return activeSection
}
