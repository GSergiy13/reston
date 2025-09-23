'use client'

import cn from 'clsx'
import { useActiveSection } from 'hooks/useActiveSection'
import { useSmoothScroll } from 'hooks/useSmoothScroll'
import { type MouseEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'

import style from './style.module.scss'

const NavigationData = [
	{ id: uuid(), href: '#how-it-works', label: 'Як працює?' },
	{ id: uuid(), href: '#features', label: 'Можливості' },
	{ id: uuid(), href: '#advantages', label: 'Переваги' },
	{ id: uuid(), href: '#integrations', label: 'Інтеграції' },
	{ id: uuid(), href: '#faq', label: 'Поширені запитання' }
]

const getSectionIds = () => NavigationData.map(item => item.href.replace('#', ''))

export const Navigation = () => {
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)
	const sectionIds = getSectionIds()
	const activeSection = useActiveSection(sectionIds, 80)
	const { handleLinkClick } = useSmoothScroll()

	const toggleMenu = () => {
		setIsMenuActive(prev => !prev)

		if (!isMenuActive) {
			document.documentElement.style.overflow = 'hidden' // <html>
		} else {
			document.documentElement.style.overflow = 'auto' // <html>
		}
	}

	const handleNavigationClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
		const sectionId = href.replace('#', '')

		handleLinkClick(e, sectionId, 80, () => {
			setIsMenuActive(false)
		})
	}

	return (
		<div className={style.navigation}>
			<nav className={cn(style.navigation__nav, { [style.active]: isMenuActive })}>
				{NavigationData.map(item => {
					const sectionId = item.href.replace('#', '')
					const isActive = activeSection === sectionId

					return (
						<a
							key={item.id}
							href={item.href}
							className={cn(style.navigation__link, {
								[style.active]: isActive && activeSection !== ''
							})}
							onClick={e => handleNavigationClick(e, item.href)}
							aria-current={isActive ? 'page' : undefined}
						>
							{item.label}

							{isActive && activeSection !== '' && (
								<span className={style.navigation__indicator}></span>
							)}
						</a>
					)
				})}
			</nav>

			<button
				className={cn(style.burgerBtn, { [style.active]: isMenuActive })}
				onClick={toggleMenu}
				aria-label='Menu'
				aria-expanded={isMenuActive}
			>
				<span className={style.burgerBtn__burgerLine}></span>
				<span className={style.burgerBtn__burgerLine}></span>
				<span className={style.burgerBtn__burgerLine}></span>
			</button>
		</div>
	)
}
