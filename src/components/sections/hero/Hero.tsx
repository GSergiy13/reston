import Image from 'next/image'

import { BasicButton } from '@/ui/basicbutton/BasicButton'

import style from './style.module.scss'

export const Hero = () => {
	return (
		<section className={style.hero}>
			<div className='container'>
				<div className={style.hero__inner}>
					<div className={style.content}>
						<h1 className={style.hero__title}>AI чат-бот для закладів</h1>

						<h2 className={style.hero__subtitle}>
							який консультує, радить, підвищує продажі та зберігає гостей
						</h2>

						<p className={style.hero__text}>
							Створіть спеціального AI Чат-бота для свого веб-сайту та запропонуйте своїм гостям
							сучасний спосіб взаємодії з вашим закладом, надайте їм миттєву підтримку, консультацію
							та підвищте загальну задоволеність відвідувачів.
						</p>

						<div className={style.hero__buttons}>
							<BasicButton filled={true}>Забронювати демо</BasicButton>
							<BasicButton>Підключити заклад</BasicButton>
						</div>
					</div>

					<div className={style.image}>
						<Image
							src='/hero.png'
							alt='Hero Image'
							width={456}
							height={446}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
