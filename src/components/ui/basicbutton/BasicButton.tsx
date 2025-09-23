import cn from 'clsx'
import Link from 'next/link'
import type { ReactNode } from 'react'

import style from './style.module.scss'

export const BasicButton = ({
	children,
	onClick,
	className,
	filled
}: {
	children: ReactNode
	onClick?: () => void
	className?: string
	filled?: boolean
}) => {
	return (
		<Link
			href='#contact'
			onClick={onClick}
			className={cn(`${style['basic-button']}`, {
				[`${style['basic-button--filled']}`]: filled
			})}
		>
			{children}
		</Link>
	)
}
