import cn from 'clsx'
import Image from 'next/image'

import { CustomList } from '@/ui/customlist/CustomList'

import { MessagingListData } from './MessagingList.data'

import style from './style.module.scss'

export const Messaging = () => {
	return (
		<section className={style.messaging}>
			<div className='container'>
				<div className={style.messaging__inner}>
					<div className={style.content}>
						<h2 className={cn('title', style.messaging__title)}>
							Додайте обмін повідомленнями як нову лінію зв’язку
						</h2>

						<p className={style.messaging__description}>
							Деякі гості полюбляють надсилати текстові повідомлення, деякі ненавидять заповнювати
							форми, а інші просто не хочуть розмовляти по телефону. RestOn AI зустрічає гостей у
							Facebook Messenger, в дірект Instagram і забезпечує безперебійну розмову з ними, тож
							вам не доведеться й пальцем поворухнути.
						</p>

						{MessagingListData && <CustomList items={MessagingListData} />}

						<p className={cn(style.messaging__description, style.messaging__description_bold)}>
							<strong>
								Результат? Плавна, швидка та безперебійна взаємодія з гостями, підвищення
								відвідуваності та продаж.
							</strong>
						</p>
					</div>
					<div className={style.image}>
						<Image
							src={'/messaging.png'}
							width={590}
							height={770}
							alt='Messaging'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
