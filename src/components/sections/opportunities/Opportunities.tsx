import cn from 'clsx'

import style from './style.module.scss'

export const Opportunities = () => {
	return (
		<section className={style.opportunities}>
			<div className={cn('container', style.opportunities__container)}>
				<h2 className={cn('title', style.opportunities__title)}>Можливості (Що вміє RestOn АІ)</h2>

				<div className={style.opportunities__inner}>
					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Інтелектуальний чат-бот</h3>

						<ul>
							<li>
								Розуміє, про що запитує гість, і надає релевантні, розумні та природні
								персоналізовані відповіді: Гість пише текст, записує голосове повідомлення або
								надсилає фото
							</li>
							<li>Розуміє контекст: "Хочу щось з риби на вечерю, не гостре"…</li>
							<li>Працює з різними мовами автоматично</li>
						</ul>
					</div>
					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Персональні рекомендації</h3>

						<ul>
							<li>Враховує алергії, дієти, уподобання</li>
							<li>Пропонує страви на основі попередніх замовлень</li>
							<li>Може показувати фото та опис блюд (з POS-системи)</li>
						</ul>
					</div>
					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Замовлення та оплата</h3>

						<ul>
							<li>
								Оформлення доставки або самовивозу блюд, пропонує рекомендації страв (“Разом
								замовляють”). Також формування персоналізованих рекомендацій на основі поведінкової
								аналітики та уподобань гостя
							</li>
							<li>Онлайн-оплата (LiqPay тощо)</li>
							<li>Розрахунок вартості, доставки та часу доставки/оформлення блюд для самовивозу</li>
						</ul>
					</div>

					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Бронювання столу</h3>

						<ul>
							<li>
								Швидке бронювання прямо в чаті, підтверджує наявність місця та просить гостя надати
								всю необхідну інформацію для здійснення резерву. Автоматично добавляє бронювання в
								реальному часі та відповідно оновлює базу даних гостей.
							</li>
							<li>
								Інтеграція з Google Календарем, ел. книгою бронювань RestOn Hostess або POS-системою
							</li>
						</ul>
					</div>

					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Надсилає підтвердження</h3>

						<ul>
							<li>Відправляє на номер гостя підтвердження броні</li>
							<li>
								Може потім обробити будь-які зміни для його резерву (скасувати, внести редагування).
							</li>
						</ul>
					</div>

					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Відповіді на часті запитання</h3>

						<ul>
							<li>Автоматичні відповіді на запитання про заклад, меню, час роботи, акції тощо</li>
							<li>
								Підтримка мультимовності, веде з гостем комунікацію та відповідає на запити його
								мовою
							</li>
							<li>GPT-відповіді, якщо запит не знайдено, або надсилання повідомлення Менеджеру</li>
						</ul>
					</div>

					<div className={style.opportunities__item}>
						<h3 className={style.opportunities__item_title}>Повторні візити</h3>

						<ul>
							<li>Пам’ятає гостя, його мову, замовлення, алергії</li>
							<li>Надсилає персональні пропозиції</li>
							<li>Веде історію гостя у CRM-системі</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
