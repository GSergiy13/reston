import cn from 'clsx'
import Image from 'next/image'

import type { ListItem } from './customlist.type'

import style from './style.module.scss'

export const CustomList = ({
	items,
	small,
	bold
}: {
	items: ListItem[]
	small?: boolean
	bold?: boolean
}) => {
	return (
		<ul
			className={cn(style.customlist__list, {
				[style.customlist__list_small]: small
			})}
		>
			{items.map(item => (
				<li
					key={item.id}
					className={cn(style.customlist__item, {
						[style.customlist__item_small]: small,
						[style.customlist__item_bold]: bold
					})}
				>
					<Image
						src={item.icon}
						width={24}
						height={24}
						alt='benefits list icon'
					/>

					<span>{item.text}</span>
				</li>
			))}
		</ul>
	)
}
