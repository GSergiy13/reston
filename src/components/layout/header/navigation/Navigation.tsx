'use client'

import cn from 'clsx'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import style from './style.module.scss'

const NavigationData = [
	{ id: uuid(), href: '#', label: 'Як працює?' },
	{ id: uuid(), href: '#', label: 'Можливості' },
	{ id: uuid(), href: '#', label: 'Переваги' },
	{ id: uuid(), href: '#', label: 'Інтеграції' },
	{ id: uuid(), href: '#', label: 'Поширені запитання' }
]

export const Navigation = () => {
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsMenuActive(prev => !prev)
	}

	return (
		<div className={style.navigation}>
			<nav className={cn(style.navigation__nav, { [style.active]: isMenuActive })}>
				{NavigationData.map(item => (
					<a
						key={item.id}
						href={item.href}
						className={style.navigation__link}
					>
						{item.label}
					</a>
				))}
			</nav>

			<button
				className={cn(style.burgerBtn, { [style.active]: isMenuActive })}
				onClick={toggleMenu}
				aria-label='Menu'
			>
				<span className={style.burgerBtn__burgerLine}></span>
				<span className={style.burgerBtn__burgerLine}></span>
				<span className={style.burgerBtn__burgerLine}></span>
			</button>
		</div>
	)
}
