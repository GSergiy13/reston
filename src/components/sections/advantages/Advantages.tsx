import cn from 'clsx'
import Image from 'next/image'

import style from './style.module.scss'

export const Advantages = () => {
	return (
		<section className={style.advantages}>
			<div className='container'>
				<h2 className={cn('title', style.advantages__title)}>
					Переваги використання чат-боту RestOn AI
				</h2>

				<div className={style.advantages__inner}>
					<div className={style.advantages__item}>
						<div className={style.content}>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Скоротіть час і вартість підтримки</h3>
								<p className={style.content__text}>
									AI чат-бот допомагає зменшити витрати на підтримку шляхом автоматизації відповідей
									на поширені запити, таким чином зводячи до мінімуму потребу в людському втручанні.
								</p>
							</div>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Збільшіть залучення гостей на ваш сайт</h3>
								<p className={style.content__text}>
									Миттєво відповідайте на запити відвідувачів, знижуючи показники відмов та
									підвищуючи інтерес і залученість користувачів.
								</p>
							</div>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Миттєві та точні відповіді</h3>
								<p className={style.content__text}>
									Наш чат-бот схожий на ChatGPT і відповідає на запити, надаючи миттєві й розумні
									відповіді людським тоном розмови.
								</p>
							</div>
						</div>
						<div className={style.image}>
							<Image
								src='/advantages_1.png'
								width={500}
								height={300}
								alt='Переваги використання чат-боту RestOn AI'
							/>
						</div>
					</div>

					<div className={cn(style.advantages__item, style.advantages__item_reverse)}>
						<div className={style.content}>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Підтримання мультимовності </h3>
								<p className={style.content__text}>
									Чат-бот працює більш ніж з 50 мовами, дозволяючи налаштовувати відповіді в чаті
									різними мовами (англійська, польська, іспанська тощо).
								</p>
							</div>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Працює та допомогає 24/7</h3>
								<p className={style.content__text}>
									Не турбуйтеся про обслуговування гостей у неробочий час. RestOn AI завжди Online
									та готовий миттєво відповісти на запитання гостей у будь-який час.
								</p>
							</div>
							<div className={style.content_box}>
								<h3 className={style.content__title}>Збільшіть базу гостей</h3>
								<p className={style.content__text}>
									З RestOn AI ви можете в рази збільшити кількість своїх потенційних гостей завдяки
									його ефективним функціям збереження. Цей інструмент полегшує цілодобовий збір
									інформації і керування нею.
								</p>
							</div>
						</div>
						<div className={style.image}>
							<Image
								src='/advantages_2.png'
								width={500}
								height={300}
								alt='Переваги використання чат-боту RestOn AI'
							/>
						</div>
					</div>
				</div>

				<div className={style.offer}>
					<h3 className={style.offer__title}>Спеціальна пропозиція</h3>
					<p className={style.offer__text}>
						Спробуйте RestOn AI безкоштовно протягом 7 днів! Після закінчення пробного періоду ви
						можете продовжити користуватися нашим сервісом за вигідною ціною всього $19 на місяць.
						Не пропустіть цю можливість покращити обслуговування ваших гостей!
					</p>

					<div className={style.offer__accent}>Почніть роботу з RestOn AI вже сьогодні!</div>
				</div>
			</div>
		</section>
	)
}
