import cn from 'clsx'
import Image from 'next/image'

import { CustomList } from '@/ui/customlist/CustomList'

import { InteractionData } from './Interaction.data'

import style from './style.module.scss'

export const Interaction = () => {
	return (
		<section className={style.interaction}>
			<div className={`container ${style.interaction__container}`}>
				<div className={style.interaction__inner}>
					<div className={style.image}>
						<Image
							src='/interaction.png'
							width={486}
							height={436}
							alt='interaction image'
						/>
					</div>

					<div className={style.content}>
						<h2 className={cn('title', style.interaction__title)}>
							Природне та розумне спілкування
						</h2>

						<p className={style.interaction__description}>
							Більше ніяких роботизованих відповідей. Коли гості звертаються, щоб зробити
							бронювання, замовити страви або цікавить якась інформація, RestOn AI відповідає
							розумно, природним тоном, як і людина. Це не якась шаблонна машина реагування, він
							точно відповідає те, що хочуть почути ваші гості.
						</p>

						{InteractionData && (
							<CustomList
								items={InteractionData}
								small
							/>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
