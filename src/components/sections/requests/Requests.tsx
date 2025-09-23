import cn from 'clsx'

import { BasicButton } from '@/ui/basicbutton/BasicButton'

import style from './style.module.scss'

export const Requests = () => {
	return (
		<section className={style.requests}>
			<div className='container'>
				<h2 className={cn('title', style.requests__title)}>
					Набридло щодня отримувати одні й ті самі повідомлення?
				</h2>

				<div className={style.requests__inner}>
					<div className={style.requests__question}>
						<p className={style.requests__questionText}>“Які години роботи закладу?”</p>
						<p className={style.requests__questionText}>“До котрої години працює кухня?”</p>
						<p className={style.requests__questionText}>“Чи є знижка на День народження?”</p>
						<p className={style.requests__questionText}>“Відправите меню?”</p>
					</div>

					<div className={style.requests__content}>
						<p className={style.requests__contentText}>
							Гості очікують, що ви дасте оперативну відповідь о 20:30, щоб оформити замовлення чи
							бронювання (а в цей час у вас обслуговування на піку, одним словом “запара”)? Це вас
							втомлює, не встигаєте виконати основну роботу.
						</p>

						<h3 className={style.requests__contentSubtitle}>
							Ми маємо рішення для вас! <br />{' '}
							<span>Знаємо, як перетворити цей хаос на легку прогулянку.</span> 
						</h3>

						<p className={style.requests__contentText}>
							RestOn AI – це  не просто чат-бот із штучним інтелектом, а ваш розумний компаньйон та
							помічник, який перетворює кожну взаємодію з простої розмови на значуще спілкування.
							Він схожий на людину, із глибоким розумінням, природним спілкуванням і
							персоналізованими відповідями. Щоб випробувати цей потужний сучасний AI Чат-бот,
							забронюйте ексклюзивну демонстраційну зустріч або зателефонуйте нам за номером{' '}
							<a
								href='tel:+380993570077'
								className='underline'
							>
								+38 099 357 0077
							</a>
							.
						</p>

						<div className={style.requests__buttons}>
							<BasicButton filled>Створити чат-бот зараз</BasicButton>

							<BasicButton>Забронювати демо</BasicButton>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
