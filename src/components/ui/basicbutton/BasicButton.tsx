import cn from 'clsx'
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
		<button
			onClick={onClick}
			className={cn(`${style['basic-button']}`, {
				[`${style['basic-button--filled']}`]: filled
			})}
		>
			{children}
		</button>
	)
}
